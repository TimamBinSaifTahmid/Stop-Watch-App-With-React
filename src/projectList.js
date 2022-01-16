import React, { useContext } from "react";
import Project from "./project";
import { useState } from "react";
import { projectContext } from "./projectContext";
//const img_url =
//("http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg");
const product_Lib = [
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
];





function ProductList() {
  let myInterval;
  const [, updateState] = React.useState();
  const reRander = React.useCallback(() => updateState({}), []);

  const [voteCount, setVoteCount] = useState(product_Lib);
  const [projectList,setProject]=useContext(projectContext)
  console.log(projectList)
  function addProduct(id) {
    let index =projectList.findIndex((obj) => obj.id === id);
    if(projectList[index].state=="Start"){
      projectList[index].state="Stop"
      projectList[index].interval=  setInterval(function(){
        projectList[index].ss++;
         if(projectList[index].ss>=0 && projectList[index].ss<=9)
         projectList[index].ss="0"+projectList[index].ss

         if(projectList[index].ss==60){
          projectList[index].mm++;
           if(projectList[index].mm>=0 && projectList[index].mm<=9)
           projectList[index].mm="0"+projectList[index].mm
           projectList[index].ss="00";

         }
         if(projectList[index].mm==60){
          projectList[index].mm="00";
          projectList[index].hh++;
          if(projectList[index].hh>=0 && projectList[index].hh<=9)
          projectList[index].hh="0"+projectList[index].hh
         } 
         console.log( projectList[index])
         setVoteCount(projectList[index].ss)
        },1000)
        console.log(myInterval)
    }
  
    else {
        console.log(myInterval)
        projectList[index].state="Start"
        clearInterval(projectList[index].interval)
    }
    projectList[index].voteCnt++;
    setVoteCount(projectList);
    // product_Lib.sort((a, b) => b.voteCnt - a.voteCnt);
    // console.log(product_Lib);
    // reRander();
  }


  // const newProductList = product_Lib.map((pd) => (
  //   <Product
  //     id={pd.id}
  //     img_url={pd.img_url}
  //     voteCnt={pd.voteCnt}
  //     name={pd.name}
  //     description={pd.description}
  //     state={pd.state}
  //     ss={pd.ss}
  //     mm={pd.mm}
  //     hh={pd.hh}
  //     upvote={addProduct}
  //   />
  // ));
     const newProjectList = projectList.map((pd) => (
    <Project
      id={pd.id}
      img_url={pd.img_url}
      voteCnt={pd.voteCnt}
      name={pd.name}
      description={pd.description}
      state={pd.state}
      ss={pd.ss}
      mm={pd.mm}
      hh={pd.hh}
      upvote={addProduct}
    />
  ));
  return <div>{newProjectList}</div>;
}
export default ProductList;
