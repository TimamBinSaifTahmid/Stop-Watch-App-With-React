import {useState} from "react"
import { projectContext } from "./projectContext";
import React, { useContext } from "react";
export default function Form(){
    const [title,setTitle]=useState('');
    const [name,setName]=useState('')
    const [projectList,setProject]=useContext(projectContext)
    const [, updateState] = React.useState();
    const reRander = React.useCallback(() => updateState({}), []);
  function  handleTitle(e){
       setTitle(e.target.value);
    }
    function  handleName(e){
        setName(e.target.value);
     }
     function HandleSubmit(e){
      
         let size=projectList.length
         console.log(name,title)
         console.log(projectList)
         setProject(priviousProjects=>[...priviousProjects ,{
            id: size+1,
            img_url:
              "https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._AC_SX184_.jpg",
            voteCnt: 10,
            name: title,
            ss:"00",
            mm:"00",
            hh:"00",
            description: name,
            state:"Start",
            interval:"" 
         }])
         e.preventDefault();
       
     }
    return (
        <form onSubmit={HandleSubmit}>
            <div className="form">
               <label>
                <p>
                <b>
                Project Title:</b></p> 
                <p>
                 <input type="text" value={title} onChange={handleTitle}/>
                 </p>    
                     </label>  
                 <p>
            
                 <b> Project Name:</b>  </p>
                <p>
                 <input type="text" value={name} onChange={handleName}/>
                 </p>
         
            <button type="submit" >Register</button>
            </div>
        </form>
    )
    

}