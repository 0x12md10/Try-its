import { atomFamily } from "recoil";


export const TODOS = [
    {
        id : 1,
        title : "Wake up at 5 a.m.",
        description : "ironically I won't",
        completed : false
    },
    {
        id : 2,
        title : "Go for a 1 hour jog.",
        description : "this will make you fit",
        completed : false
    },
    {
        id : 3,
        title : "Go to library everyday 6 p.m.",
        description : "will make you bujji",
        completed : false
    }
]

export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : id => TODOS.find(item => item.id === id)
})