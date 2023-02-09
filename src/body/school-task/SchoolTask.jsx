import {SingleTask} from '../../single-task/single-task'
import {TaskContext} from '../../App'
import {useContext} from 'react'
export const SchoolTask=()=>{
      
    const {task,setTask}=useContext(TaskContext)


    const schooltask=task.filter((item)=>{
        return item.name==='school'
    })
   const x=schooltask.map((item)=>{
    return  <SingleTask key={item.id} title={item.title}/>
   })
    return(
        <div className='collection-summary'>
            <div className='task-top'>
              <p>School</p> <p>...</p>
            </div>
            <div className='task-add-form'> <button>+</button><p>Add task</p></div>
            <div className='uncompleted-task'>
                <p>Tasks-8</p>
                {x}
            </div>
            <div className='completed-task'>
                <p>Completed-7</p>
               
            </div>
           
            
        </div>
    )
}