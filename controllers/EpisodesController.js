const Episode_Model = require('../models/Episode_Model'),
      Season_Model = require('../models/Season_Model')
module.exports = new class { 
    async index(req, res){
        res.send(200).send({Aplication: true})
    }
    async AllEpisodes(req, res){
        try {
            let data = await Episode_Model.SelectAllEps()
            res.status(200).send({data})
        } catch (err) {
            res.status(500).send({err})
            throw err
        }
    }
    async SelectEpisode(req, res){
        try {
            let {ep, temp} = req.params
            if (!isNaN(ep)){
                if(temp){
                    if (!isNaN(temp)) {
                        let data = await Season_Model.SelectEp(ep, temp)
                        if (data.length > 0){
                            res.status(200).send({data})
                        }else{
                            res.status(400).send({err:'Episodio não existe nessa temporada / Temporada não existe'})
                        }
                    }else{
                        res.status(400).send({err:'Temporada invalida'})
                    }
                }else{
                    let data = await Episode_Model.SelectOneEpForSeason(ep)
                    if (data.length > 0){
                        res.status(200).send({data})
                    }else{
                        res.status(400).send({err:'Episodio não existe'})
                    }
                }
            }else{
                res.status(400).send({err:'Episodio invalido'})
            }
        } catch (err) {
            res.status(400).send({err})
            throw err
        }
    }
}