<template>
 <v-toolbar fixed class="teal" dark>
   <v-toolbar-title class="mr-4">
     <span
       class="home"
       @click="navigateTo({name:'root'})">
     Farmer
     </span>
   </v-toolbar-title>

   <v-toolbar-items>
     <v-btn flat dark>
       Browse
     </v-btn>
   </v-toolbar-items>

   <v-spacer></v-spacer>

   <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
     <v-btn flat dark @click="navigateTo({name:'login'})">
       Login
     </v-btn>
       <v-btn flat dark @click="navigateTo({name:'register'})">
         Sign Up
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
		}
	}
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
