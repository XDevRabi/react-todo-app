import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';import { Edit, Delete } from '@mui/icons-material';

export default function TodoItem(props) {

  return (
    <>
      {props.TodoItem.length===0 ? <p className="text-center">No todo found</p> : props.TodoItem.map((todo)=>{
        return (
              <div className='bg-white px-4 py-2 flex justify-between m-2'>
              <FormGroup>
                <FormControlLabel control={<Checkbox/>} label={todo.desc} />
              </FormGroup>
      
              <div className='gap-4 flex mt-2'>
                <Edit color='primary' onClick={()=>{props.onEdit(todo)}} className="cursor-pointer"/>
                <Delete color='primary' key={todo.desc} onClick={()=>{props.onDelete(todo)}} className="cursor-pointer"/>
              </div>
            </div>)
      })}
    </>
)
}

