import react from "react";
import { useState } from "react";
const voteCount = 10;
const productName = "Book";
const productDescription = "Science Fiction";

function Project(props) {
 
  
//   let [vote_Count, setVoteCount] = useState(props.voteCnt);
//   let [newState, setState] = useState(props.state);
  let voteCount = props.voteCnt;
  function likeHandler(e) {
      
    //    console.log(props.state)
    //   if(props.state=="Start"){
       
    //      newState="Stop"
    //      console.log(newState)
    //     setState(newState)
    //   }
 
    // else if( props.state=="Stop"){
    //     newState="Start"
    //     setState(newState)
    //    }
     
    // setVoteCount( ++vote_Count );
    //props.voteCnt++;
    props.upvote(props.id);
    // console.log(1 + vote_Count );
  }
  return (
    <div className="row">
   
      <div div className="pDetails">
        <p>
          {" "}
          <b>Project Name: </b>
          {props.name}{" "}
        </p>
        <p>
          {" "}
          <b>Project Description: </b>
          {props.description}
        </p>
   
        <p id="time">
          <b> Time Count: </b>  {props.hh}:{props.mm}:{props.ss}
        </p>
        <button name="b1" id="b1" onClick={likeHandler}>
          {props.state}
        </button>
      </div>
    </div>
  );
}
export default Project;

