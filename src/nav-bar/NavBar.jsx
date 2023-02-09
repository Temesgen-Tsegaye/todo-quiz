import {FaBars,FaSearch,FaBell,FaUser,FaAdjust,FaAdd} from 'react-icons/fa'
import {useContext} from 'react'
import {ThemeContext} from '../App'
export const NavBar=({sideOpen,setSideOpen,ToggleForm})=>{
const {dark ,setDark}=useContext(ThemeContext)
    return(
        <div className={`NavBar ${dark?'nav-dark':'nav-light'}`}>
       <FaBars onClick={()=>setSideOpen(!sideOpen)} />
        <div>
            <button className='create-task' onClick={()=>{ToggleForm()}}>+</button>
            <FaAdjust onClick={()=>setDark(!dark)}/>
            <FaSearch/>
            <FaBell/>
            <FaUser/>
        </div>
        </div>
    )
}