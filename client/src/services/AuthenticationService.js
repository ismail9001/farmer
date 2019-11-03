import Api from '../services/Api'

export default {
	register: function (credentials) {
		return Api().post('register', credentials)
	}
}

//  AuthenticationService.register({
//  email: 'testing@gmail.com',
//  password: '123456'
//  })
