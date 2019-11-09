<template>
  <panel title="Song Metadata">
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
          @click="navigateTo({name: 'song-edit', params: {songId:song.id}})"
          light
          medium
          small>
          Edit
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" v-bind:src="song.albumImageUrl"/>
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
	name: 'SongMetadata',
	props: ['song'],
	methods: {
		navigateTo (route) {
			this.$router.push(route)
		}
	},
	components: {
		Panel
	}
}
</script>

<style scoped>
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
