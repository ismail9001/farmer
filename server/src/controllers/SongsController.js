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
	async show (req, res) {
		try {
			const song = await Song.findOne({
				where: {
					id: req.params.songId
				}
			})
			res.send(song)
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
	},
	async put (req, res) {
		try {
			await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			})
			res.send(req.body)
		} catch (e) {
			res.status(400).send({
				error: 'Ошибка обновления песни'
			})
		}
	}
}
