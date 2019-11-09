<template>
  <v-layout column>
    <v-flex xs6 offset-md3>
      <panel title="Register">
<!--      TODO научиться делать отступы справа слева во flex-->
          <form
            name="farmer-form"
            autocomplete="off">
          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            autocomplete="new-password"
          ></v-text-field>
          </form>
        <div class="danger-alert" v-html="error" />
        <br>
          <v-btn
            class="teal"
            @click="register" dark>
            Register
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
		async register () {
			try {
				const response = await AuthenticationService.register({
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
