import React, {useState} from 'react';
import ContainerApp from './style';
import Header from '../Header';
import Form from '../Form';
import List from  '../List';

const Container = () =>{ 

    const [todos, setTodos] = useState([{id:0,todo:'tarefa exemplo'}])

    return(
        <ContainerApp>
            <Header/>
            <Form setTodo={setTodos} Len={todos.length}/>
            <List todoList={todos} setTodo={setTodos}/>
        </ContainerApp>
    )
}

export default Container;