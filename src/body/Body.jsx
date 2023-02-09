import {CollectionSummary} from './collection-summary/CollectionSummary'
import {DesignTask} from './design-task/DesignTask'
import{GroceryTask} from './grocery-task/GroceryTask'
import {PersonalTask} from './personal-task/PersonalTask'
import {SchoolTask} from './school-task/SchoolTask'
import {ToggleContext} from '../App'
import { useContext } from 'react'
export const Body=({task})=>{
  const {toggle}=useContext(ToggleContext)
    return(
        <div className='main-body' >
        {
            toggle.collection&&<CollectionSummary task={task}/>
        }
        {
            toggle.design&&<DesignTask/>

            
        }
        {
            toggle.grocery&& <GroceryTask/>
        }
        {
            toggle.personal&&<PersonalTask/>
        }
        {
            toggle.school&&<SchoolTask/>
        }

        </div>
    )
}