import {FaFlag} from 'react-icons/fa'
import {TaskContext} from '../App'
import {useContext,useState} from 'react'
import axios from "axios";
export const GlobalForm = ({dark,ToggleForm}) => {

    const {task,setTask}=useContext(TaskContext)
    const [singleTask,setSingleTask]=useState({
        title:'',
        date:'',
        collectionId:1,
        completed:false,
    })
    const handleTask = (e) => {
     
        setSingleTask((prive) => {
          return { ...prive, [e.target.name]: e.target.value };
        });
      };

      async function  PostTask () {
        const response = await axios.post("http://localhost:3001/task",singleTask)
        console.log(response.data)
        const res2=await axios.get('http://localhost:3001/task')
        setTask(res2.data)
        console.log(`task ${task}`)

      }

  return (
   
    <div className={`global-form ${dark?'nav-dark global-shadow-dark':'nav-light global-shadow-light'}`}>
      <input type="text" name='title' value={singleTask.title}
       onChange={(e) => {
        handleTask(e);
      }} />
      <div>
        <select name="collectionId" id="" value={singleTask.collectionId}
         onChange={(e) => {
            handleTask(e);
          }}>
            <option value={1}>School</option>
            <option value={2}>Personal</option>
            <option value={3}>Design</option>
            <option value={4}>Grocery</option>
        </select>
        <input type="date" name='date'
         onChange={(e) => {
            handleTask(e);
          }} /> 
        <FaFlag className='fa-flag'/>
      </div>
      <div >
        <button className='task-add' onClick={()=>{PostTask();ToggleForm()}}>Add</button>
        <button className='task-cancel' onClick={()=>{ToggleForm()}}>cancel</button>
      </div> 
    </div>
  
  );
};
