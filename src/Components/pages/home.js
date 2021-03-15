import React, { useState } from 'react'
import Button from '../appcomponents/button'
import Navbar from '../appcomponents/navbar'
function Home() {
    const [color, setColor] = useState('black')
    const [text,setText] = useState('hello')
    function changeColorText(){
        setColor('red')
        setText('hi')
    }
    return(
        <div>
        <Navbar text="Whizzy Academy" color="#0000e6"/>
        <Navbar text="Whizzy Academy" color="#0000ff"/>
        <h1>My Component</h1>
        <Button text='clear' color="#DC143C"/>
        <Button text="login" color="#0000ff"/>
        <Button text="Cancel" color="#33ffbb"/>
        <Button text="Submit" color="#8B0000"/>
        <Button text={text} color={color} onClickButton={changeColorText}/>
        
        </div>
    )
}
export default Home
