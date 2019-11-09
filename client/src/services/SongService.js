import Api from '../services/Api'

export default {
	getAllSongs (search) {
		return Api().get('songs', {
			params: {
				search: search
			}
		})
	},
	show (songId) {
		return Api().get(`song/${songId}`)
	},
	post (song) {
		return Api().post('song', song)
	},
	put (song) {
		return Api().put(`song/${song.id}/edit`, song)
	}
}
