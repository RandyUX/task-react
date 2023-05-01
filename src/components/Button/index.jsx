import Buttons from 'react-bootstrap/Button';
import { useState } from 'react';
import style from './style.module.css'

function Button() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    <Buttons className={style['button-text']} onClick={handleClick}></Buttons> 
}

export default Button;