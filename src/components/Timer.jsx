import { useEffect, useState } from "react"
   
export const Timer =()=>{
    const [counter ,setCounter ]= useState(10)
    useEffect(()=>{
     const id =  setInterval(()=>{
          setCounter((p)=>{
          
          //p!=0?p-1 :p    this also works 
          if(p !== 0 ){
              return p-1
          }else{
              clearInterval(id)
              return 0
          }
          
         } )
        
       },1000)
       return()=>{
           console.log("mounting ")
           clearInterval(id)
       }
    },[])
    return <div>
       <h1> count is:{counter}</h1>
     
        </div>
}