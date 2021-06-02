import React, {useState} from 'react';
import {FormContainer, Input, Button }from './style';

const Form = ({setTodo, Len}) => {
    let itemtoAdd = "";
    const formHanding = (e) => {
        e.preventDefault();
        itemtoAdd = e.target.firstChild.value
        if(itemtoAdd !== ""){
            setTodo(state => [...state, {id:Len,todo:itemtoAdd}])
        }
        e.target.firstChild.value = "";
    }
    
    return(
        <FormContainer onSubmit={formHanding}>
            <Input type="text" placeholder="Informe Tarefa..."/>
            <Button type="submit">Add</Button>
        </FormContainer>
    )
};

export default Form;