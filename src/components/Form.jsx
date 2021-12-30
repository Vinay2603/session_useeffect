import { useEffect, useState } from "react";



  export const Form =()=>{
       const [counter,setCounter] = useState(10)
    
      console.log("before Effect")
     useEffect(()=>{
         console.log("inside  Effect")
     })
     useEffect(()=>{
        console.log("qwerty  Effect")
    },[counter])
    useEffect(()=>{
        console.log("asdfh  Effect")
    },[])
      console.log("after Effect")
      return(
          <>
          <h1>counter:{counter}</h1>
          <button onClick={()=>{setCounter(counter+1)}}>add</button>
         
          </>
      )
  }