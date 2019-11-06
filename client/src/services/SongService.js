import Api from '../services/Api'

export default {
	getAllSongs () {
		return Api().get('songs')
	},
	post (song) {
		return Api().post('song', song)
	}
}

//  AuthenticationService.register({
//  email: 'testing@gmail.com',
//  password: '123456'
//  })
