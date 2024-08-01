import axios from "axios";
import { useEffect, useState } from "react";


const useTodos = () => {

    const [todos,setTodos] = useState([]);

    useEffect(()=> {

    async function fetchTodos() {
        await axios.get("https://dummyjson.com/todos")
        .then((res)=> {
            console.log()
            setTodos(res.data)
        })
        .catch(err => {
            console.log('err : ' , err)
        })
    }


    fetchTodos()


    },[])

    return todos;
}

export default useTodos;