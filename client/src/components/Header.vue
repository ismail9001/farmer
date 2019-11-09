<template>
 <v-toolbar fixed class="teal" dark>
   <v-toolbar-title class="mr-4">
     <router-link
       class="home"
       tag="span"
       :to="{
     name:'songs'
     }">
     Farmer
     </router-link>
   </v-toolbar-title>

   <v-toolbar-items>
     <v-btn flat dark
            :to="{name:'songs'}">
       Browse
     </v-btn>
   </v-toolbar-items>

   <v-spacer></v-spacer>

   <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
     <v-btn flat dark
            :to="{name:'login'}">
       Login
     </v-btn>
       <v-btn flat dark
              :to="{name:'register'}">
         Sign Up
       </v-btn>
   </v-toolbar-items>
   <v-toolbar-items v-if="$store.state.isUserLoggedIn">
     <v-btn flat dark
            @click="logout">
       Log out
     </v-btn>
   </v-toolbar-items>
 </v-toolbar>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		navigateTo (route) {
			this.$router.push(route)
		},
		logout () {
			this.$store.dispatch('setToken', null)
			this.$store.dispatch('setUser', null)
			this.$router.push({
				name: 'songs'
			})
		}
	}
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
