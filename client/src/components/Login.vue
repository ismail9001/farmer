<template>
  <v-layout column>
    <v-flex xs6 offset-md3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Login
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
        <div class="error" v-html="error" />
        <br>
          <v-btn
            class="teal"
            @click="login" dark>
            Login
          </v-btn>
        </div>
      </div>
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
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	},
	mounted () {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
}
</style>
