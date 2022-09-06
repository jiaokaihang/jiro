import React from "react"

export interface User {
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
}

interface SearchPanelProps {
    users: User[],  //需要给user设置类型
    param: {
      name: string;
      personId: string
    },
    setParam: (param: SearchPanelProps['param']) => void;
  }
  

export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {
    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
            <select value={param.personId} onChange={evt => {
                // console.log(evt.target.value);
                setParam({
                    ...param,
                    personId:evt.target.value
                })
            }} >
                <option value={''}>负责人</option>
                {
                     users.map(users => <option value={users.id} key={users.id}>{users.name}</option>)
                }
            </select>
        </div>
    </form>
}