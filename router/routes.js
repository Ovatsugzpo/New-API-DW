const {Router} = require('express'),
      router = Router(),
      EpisodesController = require('../controllers/EpisodesController'),
      SeasonController = require('../controllers/SeasonController')

router.get('/', EpisodesController.index)
router.get('/episodes', EpisodesController.AllEpisodes)
router.get('/seasons', SeasonController.GetSeasons)
router.get('/episode/:ep/:temp?', EpisodesController.SelectEpisode)
router.get('/season/:temp', SeasonController.SelectSeason)

module.exports = router