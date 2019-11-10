const { Bookmark } = require('../models')

module.exports = {
	async index (req, res) {
		try {
			const bookmark = await Bookmark.findOne({
				where: {
					SongId: 1,
					UserId: 1
				}
			})

			res.send(bookmark)
		} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'an error has occured trying to fetch the bookmark'
			})
		}
	},
	async post (req, res) {
		try {
			const { songId, userId } = req.body
			const bookmark = await Bookmark.findOne({
				where: {
					SongId: songId,
					UserId: userId
				}
			})
			if (bookmark) {
				return res.status(400).send({
					error: 'you already have this set as a bookmark'
				})
			}
			const newBookMark = await Bookmark.create({
				SongId: songId,
				UserId: userId
			})
			res.send(newBookMark)
		} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'an error has occured trying to create the bookmark'
			})
		}
	},
	async delete (req, res) {
		try {
			const { bookmarkId } = req.params
			const bookmark = await Bookmark.findByPk(bookmarkId)
			await bookmark.destroy()
			res.send(bookmark)
		} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'an error has occured trying to delete the bookmark'
			})
		}
	}
}