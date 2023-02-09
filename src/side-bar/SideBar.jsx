import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import { MdDashboard, MdCollections } from "react-icons/md";
import { FaAngleUp, FaPenFancy, FaShoppingCart } from "react-icons/fa";
import { BsBook, BsPersonFill } from "react-icons/bs";
import {ToggleContext} from '../App'
import {TaskContext} from '../App'

import axios from "axios";
export const SideBar = ({ sideOpen }) => {
  const {task,setTask}=useContext(TaskContext)
  const { dark, setDark } = useContext(ThemeContext);
  const {toggle,setToggle}=useContext(ToggleContext)
  const [collapse, setCollapse] = useState(true);
  
  
  async function  GetTask () {
    
    const response = await axios.get("http://localhost:3001/task")
   
  
 setTask(response.data)
  }

  const DropAnimator = () => {
    setCollapse(!collapse);
};

const TogglingBody=(name)=>{
   const changed={...toggle}
   Object.keys(changed).forEach((item) => {
    if( item==name) {
        changed[item] =true
    }
    else{
      changed[item]=false
    }
})

setToggle(changed)
 


  
  
}

  return (
    <div
      className={`sidebar ${sideOpen ? "side-open" : "side-close"} ${
        dark ? "side-dark" : "side-light"
      }`}
     >
      <div
        className={`side-list ${dark ? "side-list-dark" : "side-list-light"}`}
      >
        <MdDashboard /> DashBord
      </div>
      <div
        className={`side-list ${dark ? "side-list-dark" : "side-list-light"}`}
      >
        <MdCollections id='' onClick={(e)=>{TogglingBody('collection')}}/> Collection{" "}
        <FaAngleUp
          className={`a ${collapse ? "b" : "c"}`}
          onClick={() => DropAnimator()}
        />
      </div>
      <div className={`collection`}>
        <div
          className={` ${!collapse ? "book" : "book-exit"} ${
            dark ? "collection-list-dark" : "collection-list-light"
          }`}
          id='school'
          onClick={(e)=>{TogglingBody('school');GetTask()}}
        >
          <BsBook className="book-icon" /> School
        </div>
        <div
          className={` ${!collapse ? "person" : "person-exit"} ${
            dark ? "collection-list-dark" : "collection-list-light"
          }`}
          id='person'
          onClick={(e)=>{TogglingBody('personal');GetTask()}}
        >
          <BsPersonFill className="person-icon" /> Personal
        </div>
        <div
          className={` ${!collapse ? "design" : "design-exit"} ${
            dark ? "collection-list-dark" : "collection-list-light"
          }`}
          id='design'
          onClick={(e)=>{TogglingBody('design');GetTask()}}
        >
          <FaPenFancy className="design-icon" /> Design
        </div>
        <div
          className={`  ${!collapse ? "cart" : "cart-exit"} ${
            dark ? "collection-list-dark" : "collection-list-light"
          }`}
          id='grocery'
          onClick={(e)=>{TogglingBody('grocery');GetTask()}}
        >
          <FaShoppingCart className="cart-icon" /> Grocery
        </div>
      </div>
    </div>
  );
};
