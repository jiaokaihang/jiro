import { useState,useEffect } from "react"
import { SearchPanel } from "./search-panel"
import axios from 'axios'
import List from "./list"
const  apiUrl = process.env.REACT_APP_API_URL
export const ProjectListSceen = () =>{
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    const [list,setList] = useState([])
    const [users,setusers] = useState([])
    useEffect(()=>{
       axios(`${apiUrl}/project`).then(res=>{
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