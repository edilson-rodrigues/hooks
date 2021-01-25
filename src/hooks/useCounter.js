import { useState } from 'react';

export const useCounter = (initalValue = 100) => {
    const [count, setCount] = useState(initalValue)

    function increment() {
        console.log('increment')
        setCount(count + 1)
    }

    function decrement() {
        console.log('decrement')
        setCount(count - 1)
    }

    return [count, increment, decrement]
}
