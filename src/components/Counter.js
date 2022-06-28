import {useState} from "react";


const Counter = () => {

    const [count, setCount] = useState(0);

    let increment = () => setCount(count => ++count);

    let decrement = () => {
        if (count === 0) return null
        setCount(count => --count);
    }

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+++</button>
        </div>
    );
}

export default Counter