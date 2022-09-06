import { useEffect, useState } from "react";
export const isFalsy = (value: any) => value === 0 ? false : !value
export const cleanObject = (object: object) => {
  //做一个对象合并  Object.assign({},object)
  const result = { ...object }
  //去遍历里面的key值
  Object.keys(result).forEach(key => {
    console.log("result", result);
    //@ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key]
    }
  })
  return result;
}
//Custom Hook 组件代码服用方案
export const useMount = (callback: () => any) => {
 useEffect(() => {
   callback()
  },[])
}





export const useDebounce = (value: any, delay?: number) => {
  //设置一个变量debouncedValue
  const [debouncedValue, setdebouncedValue] = useState(value)

  useEffect(() => {
    //每次在value变化以后，都会设置一个定时器
    const timeout = setTimeout(() => setdebouncedValue(value), delay)
    //每次在上一个useEffect处理完以后在运行 
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}