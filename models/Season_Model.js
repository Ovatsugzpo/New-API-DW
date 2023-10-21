const mongoose = require('mongoose'),
      DW_Schema = require('../database/DW_Schema'),
      DW_Model = mongoose.model('doctorwhoepisodes', DW_Schema)
    
module.exports = new class {
    async SelectTemp(temp){
        return new Promise(async (resolve, reject)=>{
            try {
                let data = await DW_Model.find({SerieName: "Doctor Who", Season: temp})
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    async SelectEp(ep, temp){
        return new Promise(async (resolve, reject)=>{
            try {
                let data = await DW_Model.find({SerieName: "Doctor Who", Episode: ep, Season: temp})
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    async GetArraySeasons(){
        return new Promise(async (resolve, reject)=>{
            try {
                let episodes = await DW_Model.find({SerieName: "Doctor Who"})
                let seasons = episodes.map(episode=>{
                    return episode.Season
                })
                seasons = seasons.filter((season, s, self)=>{
                    return self.indexOf(season) == s
                })

                let data = []

                for (let S = 0; S < seasons.length; S++) {
                    const season = seasons[S];
                    let eps = await DW_Model.find({SerieName: "Doctor Who", Season: season})
                    data.push(eps)
                }

                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
}