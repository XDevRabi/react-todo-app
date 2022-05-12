import './App.css';
import TodoItem from './Component/TodoItem';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AddCircleOutline } from '@mui/icons-material';
import React, { useState } from 'react';


function App() {
  const [todoitem, settodoitem] = useState([
  ]);

  const onDelete = (todo) => {
      settodoitem(todoitem.filter((e)=>{
        return e!==todo;
      }))
    }


  const [desc, setdesc] = useState("");

  const addTodo = (event) =>{
    event.preventDefault();
    if(!desc){
      alert("Item cannot be blank");
    }
    else{
      let item = {
        desc: desc
      }
      settodoitem([...todoitem, item]);
      setdesc("");
    }
  }


  const onEdit = (todo) => {
    setdesc(todo.desc);
    onDelete(todo);
  }

  return (
      <Container className='bg-slate-200 m-auto py-10 min-h-screen'>
      <div className='text-center font-bold text-2xl'>Todo App</div>
        <form name='todoForm' onSubmit={addTodo}>
          <div className='flex justify-center py-10'>
            <TextField id='description' fullWidth variant="standard" label="Add Task" type="text" value={desc} onChange={(e) =>setdesc(e.target.value)} sx={{backgroundColor: "transparent"}} style={{width: "50%"}}/>
            <Button type='submit' startIcon={<AddCircleOutline/>} variant="contained" sx={{marginLeft: '1rem', width: '105px'}}>ADD</Button>
          </div>
          <Container sx={{width: '70%'}} className='m-auto py-10 flex'>
            <TodoItem TodoItem={todoitem} onDelete={onDelete} onEdit={onEdit}/>
          </Container>
        </form>
      </Container>
  );
}

export default App;
