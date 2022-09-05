
export const isFalsy = (value) => value ===0 ? false : !value
export const cleanObject = (object) =>{
   //做一个对象合并  Object.assign({},object)
   const result = {...object}
   //去遍历里面的key值
   Object.keys(result).forEach(key =>{
    console.log("result",result);
    const value = result[key]
      if(isFalsy(value)){
        delete result[key]
      }
   })
   return result;
}