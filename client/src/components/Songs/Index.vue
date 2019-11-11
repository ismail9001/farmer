<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks/>
      <recently-viewed-songs class="mt-4"/>
    </v-flex>
    <v-flex xs6 class="ml-4">
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

export default {
	name: 'Songs',
	components: {
		SongsPanel,
		SongsSearchPanel,
		SongsBookmarks,
		RecentlyViewedSongs
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
