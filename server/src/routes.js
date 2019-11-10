const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
	app.post('/register',
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)
	app.post('/login',
		AuthenticationController.login)
	app.get('/songs',
		SongsController.getAllSongs)
	app.get('/song/:songId',
		SongsController.show)
	app.post('/song',
		SongsController.createSong)
	app.put('/song/:songId/edit',
		SongsController.put)
	app.get('/bookmarks',
		BookmarksController.index)
	app.post('/bookmarks',
		BookmarksController.post)
	app.delete('/bookmarks/:bookmarkId',
		BookmarksController.delete)
}
