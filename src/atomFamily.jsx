import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";



//synchronous way

// export const todoAtomFamily = atomFamily({
//     key : "todoAtomFamily",
//     default : id => TODOS.find(item => item.id === id)
// })

// async way

export const todoAtomFamily = atomFamily({
    key : "todoAtomsFamily2",
    default : selectorFamily({
        key : "todoAtomsFamily2/selectorFamily",
        get : id => async ({get}) => {
            await new Promise(r=> setTimeout(r,3000))
            const data = await axios.get(`http://localhost:3000/${id-1}`) ;
            return (data.data);
        }
    })
})