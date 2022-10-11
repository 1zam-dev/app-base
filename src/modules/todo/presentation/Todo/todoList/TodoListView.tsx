import { useEffect } from "react";
import useViewModel from "./TodoListViewModel";
import {
    List,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
} from "@mui/material";

import { observer } from 'mobx-react-lite';


const TodoListView = observer(() => {
    const { getTodos, todos } = useViewModel();

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <List>
            {todos.map((todo, i) => {
                return (
                    <ListItem key={i}>
                        <ListItemIcon>
                            <Checkbox checked={todo.isComplete} />
                        </ListItemIcon>
                        <ListItemText primary={todo.title} />
                    </ListItem>
                );
            })}
        </List>
    );
})

export default TodoListView;