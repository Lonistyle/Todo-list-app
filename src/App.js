
import './cssFiles/App.css';
import React, { useEffect, useState } from 'react';
import Todo from './Todo.js'
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  useEffect(()=> {
    db.collection('todos').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo })))
  })
  },[]);

  


  const addTodo=(event)=>{
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTodos([...todos,input]);
    setInput('');
  }

  return (
    
    <div className="App">
    
       
  <h1>Todo List :D</h1>
    <FormControl>
    <InputLabel>Write a todo</InputLabel>
    <Input className="input-btn" value={input} onChange={event=>setInput(event.target.value)}/>
    </FormControl>

   
    <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
      Add To Do
      </Button>
 
    <ul >
      {todos.map(todo=>(
        <Todo todo={todo}/>
        ))}
    </ul>
    </div>
  );
}

export default App;
