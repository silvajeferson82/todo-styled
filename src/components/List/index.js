import React from 'react'
import {ListContainer, Li, Button} from './style';

const List = ({todoList, setTodo}) => {


    const displayList = () => {
        return(
            <div>
                {
                    todoList.map(item => {
                        return(
                            <div>
                                <Li>{item.todo}<Button onClick={() => {setTodo(todoList.filter(i => i.id !== item.id))}}><i class="bi bi-trash-fill"></i></Button></Li>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return(
    <ListContainer>
        <ul>
            {displayList()}
        </ul>
    </ListContainer>
    )
}

export default List;