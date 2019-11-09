<template>
      <panel title="Songs">
        <v-btn
          slot="action"
          :to="{
          name: 'songs-create'
          }"
          light
          fab
          medium
          absolute
          right
          small>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                slot="action"
                :to="{
          name: 'song', params: {songId:song.id}
          }"
                light
                medium
                small>
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" v-bind:src="song.albumImageUrl"/>
            </v-flex>
          </v-layout>
        </div>
      </panel>
</template>

<script>
import SongsService from '@/services/SongService'
export default {
	name: 'SongsPanel',
	data () {
		return {
			songs: null
		}
	},
	watch: {
		'$route.query.search': {
			immediate: true,
			async handler (value) {
				this.songs = (await SongsService.getAllSongs(value)).data
			}
		}
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
