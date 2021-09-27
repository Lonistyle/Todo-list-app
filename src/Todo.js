import {React,useState} from 'react'
import {List,ListItemText,Button,Modal,ListItem} from '@material-ui/core';
import db from './firebase';
import {makeStyles} from '@material-ui/core/styles';
import styles from './cssFiles/Todo.css';



const useStyles =makeStyles((theme)=>({
    paper:{
    position:'auto',
    width:400,
    backgroundColor:theme.palette.background.paper,
    border:'2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,3,4),
    },
}))


function Todo(props) {
    const classes=useStyles();
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState();
    const handleOpen=()=>{
        setOpen(true);
    }
    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo: input},{merge:true});
        setOpen(false);
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e=>setOpen(false)}
    >
            <div className={classes.paper}>
                <h1>Update Task!</h1>
                <input  placeholder={props.todo.todo} value={input} onChange={event=> setInput(event.target.value)}/>
                <button onClick={updateTodo}>Update !</button>
            </div>
        </Modal>
        <List useStyles={styles}>
            <ListItem >
                <ListItemText primary={props.todo.todo}/>
            </ListItem>
                <button onClick={e=>setOpen(true)}>Edit</button>
                <Button onClick={event =>db.collection('todos').doc(props.todo.id).delete()}>X</Button>
        </List>
        </>
    )
}

export default Todo
