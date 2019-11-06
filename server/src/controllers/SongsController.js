const { Song } = require('../models')

module.exports = {
	async getAllSongs (req, res) {
		try {
			const songs = await Song.findAll({
				limit: 100
			})
			res.send(songs)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to fetch the songs'
			})
		}
	},
	async createSong (req, res) {
		try {
			const song = await Song.create(req.body)
			res.send(song)
		} catch (e) {
			res.status(400).send({
				error: 'Ошибка записи песни'
			})
		}
	}
}
