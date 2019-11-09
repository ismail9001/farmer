<template>
<v-layout>
<!--  TODO: проверить валидацию, должен работать отдельный вывод ошибок для каждого поля (сейчас при наличии одной ошибки, вывод на все поля)-->
  <v-flex xs4>
  <panel title="Song Metadata">
    <v-text-field
      label="Title"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.title"
    ></v-text-field>
    <v-text-field
      label="Artist"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.artist"
    ></v-text-field>
    <v-text-field
      label="Genre"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.genre"
    ></v-text-field>
    <v-text-field
      label="Album"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.album"
    ></v-text-field>
    <v-text-field
      label="Album image URL"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.albumImageUrl"
    ></v-text-field>
    <v-text-field
      label="YouTube ID"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.youtubeId"
    ></v-text-field>
  </panel>
  </v-flex>
  <v-flex xs8>
    <panel title="Song Structure" class="ml-4">
    <v-textarea
      label="Tab"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.tab"
    ></v-textarea>
    <v-textarea
      label="Lyrics"
      required
      :rules=[rules.required.check]
      :error-messages="error"
      v-model="song.lyrics"
    ></v-textarea>
    </panel>
    <v-btn
      class="teal"
      @click="save" dark>
      Save Song
    </v-btn>
  </v-flex>
</v-layout>
</template>

<script>
import SongService from '@/services/SongService'
export default {
	name: 'CreateSong',
	data () {
		return {
			song: {
				title: null,
				artist: null,
				genre: null,
				album: null,
				albumImageUrl: null,
				youtubeId: null,
				lyrics: null,
				tab: null
			},
			rules: {
				required: {
					error: 'This field is required',
					check: (value) => !!value
				}
			},
			error: null
		}
	},
	methods: {
		async save () {
			this.error = null
			const areAllFieldsFilledIn = Object
				.keys(this.song)
				.every(key => !!this.song[key])
			if (!areAllFieldsFilledIn) {
				this.error = this.rules.required.error
			}
			const songId = this.$store.state.route.params.songId
			try {
				await SongService.put(this.song)
				this.$router.push({
					name: 'songs',
					params: {
						songId: songId
					}
				})
			} catch (err) {
				console.log(err)
			}
		}
	},
	async mounted () {
		try {
			const songId = this.$store.state.route.params.songId
			this.song = (await SongService.show(songId)).data
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style scoped>

</style>
