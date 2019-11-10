<template>
  <v-layout>
    <v-flex xs6 offset-md3>
      <panel title="Login">
          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
        <div class="danger-alert" v-html="error" />
        <br>
          <v-btn
            class="teal"
            @click="login" dark>
            Login
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
	data () {
		return {
			email: '',
			password: '',
			error: null
		}
	},
	methods: {
		async login () {
			try {
				const response = await AuthenticationService.login({
					email: this.email,
					password: this.password
				})
				this.$store.dispatch('setToken', response.data.token)
				this.$store.dispatch('setUser', response.data.user)
				this.$router.push({
					name: 'songs'
				})
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
