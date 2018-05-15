
const query = {
  /**
   * 查询
   * @param {*} model 
   * @param {*} query 
   */
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
    },
    /**
     * 保存
     * @param {*} model 
     */
    async save(model){
      return new Promise((resolve,reject)=>{
          model.save().exec((err,res)=>{
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