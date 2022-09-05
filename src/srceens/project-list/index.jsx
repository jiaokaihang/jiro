import { useState,useEffect } from "react"
import { SearchPanel } from "./search-panel"
import axios from 'axios'
import List from "./list"
import * as qs from "qs"
import { cleanObject } from "./../../utills/index"
const  apiUrl = process.env.REACT_APP_API_URL
export const ProjectListSceen = () =>{
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    const [list,setList] = useState([])
    const [users,setusers] = useState([])
    useEffect(()=>{
      console.log(qs.stringify(cleanObject(param)));
       axios(`${apiUrl}/project?${qs.stringify(cleanObject(param))}`).then(res=>{
        console.log('res.data',res.data);
        setList(res.data)
       })
    },[param])
  useEffect(()=>{
    axios(`${apiUrl}/users`).then( response =>{
        console.log('response 用户名',response.data);
        if(response.statusText==="OK"){

            setusers(response.data)
        }
    })
  },[])
    return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
    </div>
}