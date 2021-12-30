import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

export const Todo =()=>{
    const [text, setText]= useState("")
    const [todo,setTodo] = useState([])

    useEffect(()=>{
        getTodo()
    },[])

    const addTodo=()=>{
        const payload ={
            title: text,
            status : false 
        }
        fetch("http://localhost:3001/todos",{
            method : "POST",
            body: JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            },
        }).then(()=>{
            getTodo()
            setText("")
        })
    }

    const getTodo =()=>{
        fetch("http://localhost:3001/todos")
        .then((d)=> d.json())
        .then((res)=>{
            console.log(res)
            setTodo(res)  
        }) 
    }
    return (
       
        <div>
            <input type="text" value={text} placeholder="Enter the Todo"  onChange={(e)=>setText(e.target.value)}/>
            <button  onClick={addTodo}>ADD</button>

            {todo.map((e)=>(<div>{e.title}</div>))}
        </div>
        
    )
}