import { atom } from "recoil";


export const counterAtom = atom({
    key : "counterAtom",
    default : 0
})

/*

// Recoil
 avoid requiring the values that are not needed. if only value is needed and not the set func. use specific hooks avaliable out of the box.
main topics:

RecoilRoot:
    wrapper to use RecoilRoot. If we need to access the values of Atomics. wrap the parent in RecoilRoot Component.
    eg: <RecoilRoot> {children goes here eg:App} </RecoilRoot>
useRecoilState:
    is similar to `useState`. useRecoilState gives access to array of the state and setState [state,setState].
    eg : `const [count,setCount] = useRecoilState(countatom)`
useRecoilValue:
    is used to get only the state value.
    eg : `const count = useRecoilValue(countatom)`
useSetRecoilState:
    is used to get only the setstate func.
    eg : `const setCount = useSetRecoilState(countatom)`

Selector:
A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
Note : This is similar to we using useMemo to get a derived state.

    Eg :
    `const filteredTodoListState = selector({
    key: 'FilteredTodoList',
    get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
        case 'Show Completed':
        return list.filter((item) => item.isComplete);
        case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
        default:
        return list;
    }
    },
    });`

    */