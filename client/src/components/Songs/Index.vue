<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks/>
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
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongService'

export default {
	name: 'Songs',
	components: {
		SongsPanel,
		SongsSearchPanel,
		SongsBookmarks
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
