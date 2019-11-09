<template>

  <v-layout column>
    <v-flex xs6 offset-md3>
      <songs-search-panel />
      <SongsPanel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongService'
export default {
	name: 'Songs',
	components: {
		SongsPanel,
		SongsSearchPanel
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
		// do request yo backend
		this.songs = (await SongsService.getAllSongs()).data
	}
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 333px;
    overflow: hidden;
  }
  .song-artist{
    font-size: 24px
  }
  .song-genre {
    font-size: 18px
  }
  .song-title {
    font-size: 30px
  }
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
