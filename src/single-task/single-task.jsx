import { FaAngleUp, FaPenFancy, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { TaskContext } from "../App";
import { useEffect } from "react";
import { useLongPress } from 'use-long-press';

export const SingleTask = ({id,completed,title,date,collectionId}) => {
  const [collapse, setCollapse] = useState(true);
  
  const { dark, setDark } = useContext(ThemeContext);
  const { task, setTask } = useContext(TaskContext);
  
   
  const bind = useLongPress(() => {
    const filterd=task.filter((item)=>{
      return item.id!=id
    })
    setTask(filterd)
axios.delete(`http://localhost:3001/task/${id}`)
    
 
  },{threshold: 1000,});

  async function UpdateTask() {

       if(completed==1){
    var updated=task.map((item)=>{
      if(item.id==id){
        return {...item,completed:0}
      }
      else {
        return item
      }

    })
    setTask(updated)
  }
  else if(completed==0){
    var updated2=task.map((item)=>{
      if(item.id==id){
        return {...item,completed:1}
      }
      else {
        return item
      }

    })
    setTask(updated2)
  }
console.log(`task${task}`)
 
 
    

  }
  useEffect(()=>{
    axios.put(`http://localhost:3001/task/${id}`,{title,date,completed,collectionId});

  },[task])

  return (
    <div className={`single-task ${dark ? "nav-dark" : "nav-light"}`}  {...bind()}>
      
      <div className="single-task-top">
        <input type="checkbox" onChange={() => {UpdateTask()}} checked={Boolean(completed)}   /> <p className={`${completed?'strike':''}`} >{title}</p>{" "}
        <FaAngleUp
          className={`task-collapse-arrow ${
            collapse ? "task-collapse-arrow-up" : "task-collapse-arrow-down"
          } `}
          onClick={() => {
            setCollapse(!collapse);
          }}
        />
      </div>
      <div className={`${collapse ? "bottom-exit" : "bottom-enter"}`}>{date}</div>
    </div>
  );
};
