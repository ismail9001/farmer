import Api from '../services/Api'

export default {
	index (bookmark) {
		return Api().get('bookmarks', {
			params: bookmark
		})
	},
	post (bookmark) {
		console.log('-----------------' + bookmark)
		return Api().post('bookmarks', bookmark)
	},
	delete (bookmarkId) {
		console.log(bookmarkId)
		return Api().delete(`bookmarks/${bookmarkId}`)
	}
}
