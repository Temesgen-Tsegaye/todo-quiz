import {FaFlag} from 'react-icons/fa'
export const SingleForm = ({dark}) => {
  return (
   
    <div className={`global-form ${dark?'nav-dark global-shadow-dark':'nav-light global-shadow-light'}`}>
      <input type="text" />
      <div>
        
        <input type="date" /> 
        <FaFlag className='fa-flag'/>
      </div>
      <div >
        <button className='task-add'>Add</button>
        <button className='task-cancel'>cancel</button>
      </div> 
    </div>
  
  );
};
