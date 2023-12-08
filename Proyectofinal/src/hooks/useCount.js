import { useState } from "react"

export const useCount = (initial = 0, max) => {
const [Count, setCount] = useState(initial)

const incremento = ()=> {
    if (Count === max) {
       return setCount(Count)
    } 
    setCount(Count + 1)
    
}

const decremento = ()=> {
    if(Count === initial) {
        return setCount(Count)
    } 
        setCount(Count - 1)
    
}

return {
    Count,
    incremento,
    decremento
}
}