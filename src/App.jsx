
import './App.css'

import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoAtomFamily } from './atomFamily';




function App() {

  return (
    <RecoilRoot>
      <Todos/>
    </RecoilRoot>
  )
}


function Todos() {



    const setTodo = useSetRecoilState(todoAtomFamily(1));

    const updateTodoHandler = ()=>{
      setTodo(todo => {
        return {
          ...todo,
          completed : !todo.completed
        }
      })
    }



  return (
    <div>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <button onClick={updateTodoHandler}>Update Todo</button>
    </div>
  )



}

function Todo({id}) {
  
  const todo = useRecoilValue(todoAtomFamily(id));

  return (
    <div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p>{(todo.completed).toString()}</p>
        <br />
    </div>
  )
}

/*------------------------------*/







export default App
