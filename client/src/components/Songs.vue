<template>

  <v-layout column>
    <v-flex xs6 offset-md3>
      <panel title="Songs">
          <v-btn
            slot="action"
            @click="navigateTo({name: 'songs-create'})"
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
                @click="navigateTo({name: 'song', params: {songId:song.id}})"
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
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongService'
export default {
	name: 'Songs',
	components: {
		Panel
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
