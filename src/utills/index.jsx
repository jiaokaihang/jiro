import { useEffect, useState } from "react";

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
//Custom Hook 组件代码服用方案
export const useMount =(callback) =>{
     useEffect(()=>{
      callback()
     },[])
}

export const useDebounce = (value,delay)=>{
   //设置一个变量debouncedValue
   const [debouncedValue,setdebouncedValue] = useState(value)

   useEffect(()=>{
    //每次在value变化以后，都会设置一个定时器
      const timeout = setTimeout(()=>setdebouncedValue(value),delay)
    //每次在上一个useEffect处理完以后在运行
      return ()=>clearTimeout(timeout)
    },[value,delay])
    return debouncedValue
}