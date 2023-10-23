const Season_Model = require('../models/Season_Model')
module.exports = new class{
    async SelectSeason(req, res){
        try {
            let {temp} = req.params
            if (!isNaN(temp)) {
                let data = await Season_Model.SelectTemp(temp)
                if (data.length > 0){
                    res.status(200).send({data})
                }else{
                    res.status(400).send({err:'Temporada não existe'})
                }
            }else{
                res.status(400).send({err:'Temporada invalida'})
            }
        } catch (err) {
            res.status(400).send({err})
            throw err
        }
    }
    async GetSeasons(req, res){
        try {
            let data = await Season_Model.GetArraySeasons()
            res.status(200).send({data})
        } catch (err) {
            res.status(400).send({err})
            throw err
        }
    }
}