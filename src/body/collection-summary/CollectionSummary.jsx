import { MdDashboard, MdCollections } from "react-icons/md";
import { FaAngleUp, FaPenFancy, FaShoppingCart } from "react-icons/fa";
import { BsBook, BsPersonFill } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {ThemeContext} from '../../App'
import { useContext } from "react";
import {TaskContext} from '../../App'
export const CollectionSummary = ({task}) => {
  const {dark,setDark}=useContext(ThemeContext)
  const schoolTask=task.filter((item)=>{
    return item.name=='school'
  })

 const schoolTaskCompleted=schoolTask.filter((item)=>{
     return item.completed==1
 })
  const personalTask=task.filter((item)=>{
    return item.name=='personal'
  })
 const personalTaskCompleted=personalTask.filter((item)=>{
     return item.completed==1
 })
  const designTask=task.filter((item)=>{
    return item.name=='design'
  })
 const designTaskCompleted=designTask.filter((item)=>{
     return item.completed==1
 })
  const groceryTask=task.filter((item)=>{
    return item.name=='groceries'
  })
 const groceryTaskCompleted=groceryTask.filter((item)=>{
     return item.completed==1
 })
 console.log(`school task ${schoolTask} task ${task}`)
 

  return (
    <div className="collection-summary">
      <div className="col-top">
        <p>Collection</p> <p>...</p>
      </div>
      <div className="col-mid">
        <button className={`${dark? 'side-dark' :'side-light'}`}>Faborite</button>
        <button className={`${dark? 'side-dark' :'side-light'}`}>All collection</button>
      </div>
      <div className="col-bot">
        <div className={`card ${dark? 'side-dark' :'side-light'}`}>
          <BsBook className='book-icon' />
          <div>
            <div>
              <h4>School</h4>
              <p>{schoolTaskCompleted.length}/{schoolTask.length} done</p>
            </div>
            <div className="circle-container">
              <CircularProgressbar value={(schoolTaskCompleted.length/schoolTask.length)*100||0}  />
            </div>
          </div>
        </div>
        <div className={`card ${dark? 'side-dark' :'side-light'}`}>
          <BsPersonFill className='person-icon' />
          <div>
            <div>
              <h4>Personal</h4>
              <p>{personalTaskCompleted.length}/{personalTask.length} done</p>
            </div>
            <div className="circle-container">
              <CircularProgressbar value={(personalTaskCompleted.length/personalTask.length)*100||0}  />
            </div>
          </div>
        </div>
        <div className={`card ${dark? 'side-dark' :'side-light'}`}>
          <FaPenFancy className='design-icon' />
          <div>
            <div>
              <h4>Design</h4>
              <p>{designTaskCompleted.length}/{designTask.length} done</p>
            </div>
            <div className="circle-container">
              <CircularProgressbar value={(designTaskCompleted.length/designTask.length)*100||0}  />
            </div>
          </div>
        </div>
        <div className={`card ${dark? 'side-dark' :'side-light'}`}>
          <FaShoppingCart className='cart-icon' />
          <div>
            <div>
              <h4>Grocery</h4>
              <p>{groceryTaskCompleted.length}/{groceryTask.length} done</p>
            </div>
            <div className='circle-container'>
              <CircularProgressbar value={(groceryTaskCompleted.length/groceryTask.length)*100||0}  />
            </div>
          </div>
        </div>
        <button className={`${dark? 'side-dark' :'side-light'}`}>+</button>
      </div>
    </div>
  );
};
