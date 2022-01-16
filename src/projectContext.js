import { createContext,useState } from "react";


export const projectContext=createContext();

export function ProjectProvider(props){

    const [projects,setProjects]=useState([
        {
            id: 1,
            img_url:
              "https://images-na.ssl-images-amazon.com/images/I/51wfzg618CL._AC_SX184_.jpg",
            voteCnt: 11,
            ss:"00",
            mm:"00",
            hh:"00",
            name: "Book1",
            description: "Novel",
            state:"Start",
            interval:""
          },
          {
            id: 2,
            img_url:
              "https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._AC_SX184_.jpg",
            voteCnt: 10,
            name: "Book2",
            ss:"00",
            mm:"00",
            hh:"00",
            description: "Literaure",
            state:"Start",
            interval:""
          },
          {
            id: 3,
            img_url:
              "https://images-na.ssl-images-amazon.com/images/I/51uf17CjFMS._AC_SX184_.jpg",
            voteCnt: 9,
            name: "Book3",
            ss:"00",
            mm:"00",
            hh:"00",
            description: "Poetry",
            state:"Start",
            interval:""
          },
    ]);  
    return(
      <projectContext.Provider value={[projects,setProjects]}>
          {props.children}

      </projectContext.Provider>
    );

}