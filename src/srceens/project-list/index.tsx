import { useState,useEffect } from "react"
import { SearchPanel } from "./search-panel"
import axios from 'axios'
import List from "./list"
import qs from "qs"
import { cleanObject, useMount } from "../../utills/index"
import { useDebounce } from "../../utills/index"
const  apiUrl = process.env.REACT_APP_API_URL
export const ProjectListSceen = () =>{
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    const [list,setList] = useState([])
    const [users,setusers] = useState([])
    const debouncedParam = useDebounce(param,100)
    useEffect(()=>{
       axios(`${apiUrl}/project?${qs.stringify(cleanObject(debouncedParam))}`).then(res=>{
        setList(res.data)
       })
    },[debouncedParam])
    // 回调函数   另外一个回调 {users   setusers  }
    /// function("1","2"){
// ajax(){

// }.then(res=>{
// 2(res.data)
// })
    // }
  useMount(()=>{
    axios(`${apiUrl}/users`).then( response =>{
        console.log('response 用户名',response.data);
        if(response.statusText==="OK"){

            setusers(response.data)
        }
    })
  })
    return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
    </div>
}