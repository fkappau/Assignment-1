import React, { useState } from 'react';

function Counter (){

    

    const [count, setCount] = useState(0)

    function sum(){
        setCount(count+1)
    }
    function multiply(){
        setCount(count*3)

    }
    
    function Hello(){
        setCount( "hello" )
    }

    function subtract(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter</h1> 
            { count }
        <button onClick={ Hello }> Hello</button>   
        <button onClick={ multiply }> multiply </button>   
        <button onClick={ subtract }> subtract </button>
        <button onClick={ sum }> submit </button>
        </div>
    )
}
export default Counter