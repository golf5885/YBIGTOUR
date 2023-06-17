import React, {useState} from "react";
import "./index"

function Input() {
    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="input">
            {text}
            <br/>
        <input onChange={onChange} value={text} className="input"/>
        </div>
    )
}



export default Input;