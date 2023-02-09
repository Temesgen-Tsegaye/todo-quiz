import "./App.css";
import { useState, createContext } from "react";
import { NavBar } from "./nav-bar/NavBar";
import {SideBar} from './side-bar/SideBar'
import {Body} from './body/Body'
import {GlobalForm} from './forms/global-form'

export const ThemeContext = createContext();
export const ToggleContext=createContext();
export const TaskContext=createContext();

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [formToggle,setFormToggle]=useState(false)
  const [toggle,setToggle]=useState({
    collection:true,
    design:false,
    grocery:false,
    personal:false,
    school:false,
})
const [task,setTask]=useState([])
console.log(task)
  const [dark, setDark] = useState(false);

  const ToggleForm=()=>{
   setFormToggle(!formToggle)
  }

  return (
    <TaskContext.Provider value={{task,setTask}}>
  <ToggleContext.Provider value={{toggle,setToggle}} >
<ThemeContext.Provider value={{dark, setDark}}>
      <div className={`App ${dark?'app-dark':'app-light'}`}>
        <SideBar  sideOpen={sideOpen}/>
        <NavBar ToggleForm={ToggleForm} setSideOpen={setSideOpen} sideOpen={sideOpen} />
    
        <Body task={task}/>
       
        
       {formToggle&&<GlobalForm dark={dark} />}
         
    
      </div>
    </ThemeContext.Provider>
    </ToggleContext.Provider>
    </TaskContext.Provider>
  )}

  export default App