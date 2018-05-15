
const query = {
    async find(model,query){
      return new Promise((resolve,reject)=>{
          model.find(query).exec((err,res)=>{
            if(!err){
              resolve(res)
            }else{
              reject(err)
            }
          })
      })
    }

}


module.exports = query