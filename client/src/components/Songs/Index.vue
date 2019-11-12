<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks/>
      <recently-viewed-songs class="mt-4"/>
    </v-flex>
    <v-flex :class="{
    xs12: !isUserLoggedIn,
    xs6: !isUserLoggedIn
    }" class="ml-4">
      <songs-search-panel />
      <SongsPanel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongService'
import { mapState } from 'vuex'

export default {
	name: 'Songs',
	components: {
		SongsPanel,
		SongsSearchPanel,
		SongsBookmarks,
		RecentlyViewedSongs
	},
	computed: {
		...mapState([
			'isUserLoggedIn',
			'user'
		])
	},
	data () {
		return {
			songs: null
		}
	},
	methods: {
		navigateTo (route) {
			this.$router.push(route)
		}
	},
	async mounted () {
		this.songs = (await SongsService.getAllSongs()).data
	}
}
</script>

<style scoped>
</style>
