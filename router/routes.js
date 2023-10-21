const {Router} = require('express'),
      router = Router(),
      EpisodesController = require('../controllers/EpisodesController'),
      SeasonController = require('../controllers/SeasonController')

router.get('/Episodes', EpisodesController.AllEpisodes)
router.get('/Seasons', SeasonController.GetSeasons)
router.get('/Episode/:ep/:temp?', EpisodesController.SelectEpisode)
router.get('/Season/:temp', SeasonController.SelectSeason)

module.exports = router