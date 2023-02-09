import {SingleTask} from '../../single-task/single-task'


export const GroceryTask=()=>{
   
    return(
        <div className='collection-summary'>
            <div className='task-top'>
              <p>School</p> <p>...</p>
            </div>
            <div className='task-add-form'> <button>+</button><p>Add task</p></div>
            <div className='uncompleted-task'>
                <p>Tasks-8</p>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
            </div>
            <div className='completed-task'>
                <p>Completed-7</p>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
                <SingleTask/>
            </div>
           
            
        </div>
    )
}