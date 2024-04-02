import React, {useState} from 'react';
function Contador(props) {

    const [count, setCount] = useState(props.number || 0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    };

    return (
        <div className="container-counter">
            <div className="contador">
                <h1>{count}</h1>
            </div>
            <div className="btn-contador">
                <button className="btn" onClick={handleIncrement}>Incrementar</button>
                <button className="btn" onClick={handleDecrement}>Decrementar</button>
            </div>
        </div>
    );
}

export default Contador;
