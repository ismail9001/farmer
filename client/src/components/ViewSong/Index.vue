<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-4">
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-4">
        <lyrics :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongService'
import YouTube from './YouTube'
export default {
	data () {
		return {
			song: {}
		}
	},
	name: 'ViewSong',
	async mounted () {
		const songId = this.$store.state.route.params.songId
		this.song = (await SongsService.show(songId)).data
	},
	components: {
		YouTube,
		SongMetadata,
		Lyrics,
		Tab
	}
}
</script>

<style scoped>

</style>
