import Api from '../services/Api'

export default {
	getAllSongs () {
		return Api().get('songs')
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

//  AuthenticationService.register({
//  email: 'testing@gmail.com',
//  password: '123456'
//  })
