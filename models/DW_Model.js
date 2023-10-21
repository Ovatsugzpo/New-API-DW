const mongoose = require('mongoose'),
      DW_Schema = require('../database/DW_Schema'),
      DW_Model = mongoose.model('doctorwhoepisodes', DW_Schema)
    
module.exports = new class {
    async SelectAllEps(){
        return new Promise(async (resolve, reject)=>{
            try {
                let data = await DW_Model.find({SerieName: "Doctor-Who"})
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    async SelectTemp(temp){
        return new Promise(async (resolve, reject)=>{
            try {
                let data = await DW_Model.find({SerieName: "Doctor-Who", Season: temp})
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    async SelectOneEp(ep, temp){
        return new Promise(async (resolve, reject)=>{
            try {
                let data = await DW_Model.findOne({SerieName: "Doctor-Who", Episode: ep, Season: temp})
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    async SelectOneEpForSeason(ep){
        return new Promise(async (resolve, reject)=>{
            try {
                let data = await DW_Model.find({SerieName: "Doctor-Who", Episode: ep})
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
}