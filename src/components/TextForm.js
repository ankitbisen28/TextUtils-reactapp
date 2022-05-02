import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLwClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    
    const handleOnchange = (event)=> {
        // console.log("Handal on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode=== 'dark'?'white':'#1a3852'}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mytext" onChange={handleOnchange} style={{background: props.mode=== 'dark'?'#274e70':'white', color: props.mode=== 'dark'?'white':'#1a3852'}} value={text} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-success my-1" onClick={handleUpClick}>Convert to Uppercase</button> 
            <button disabled={text.length===0} className="btn btn-warning mx-1" onClick={handleLwClick}>Convert to Lowercase</button> 
            <button disabled={text.length===0} className="btn btn-dark my-1" onClick={handleClearClick}>Clear</button> 
            <button disabled={text.length===0} className="btn btn-danger my-1 mx-1" onClick={handleCopy}>Copy</button> 
        </div> 
        <div className="container" style={{color: props.mode=== 'dark'?'white':'#1a3852'}}>
            <h1>Your text summary</h1>
            <p><strong>{text.split(/\s/).filter((element)=> {return element.length!==0}).length} </strong> words and <strong>{text.length}</strong>  characters</p>
            <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes to read </p>
            <h3>Priview</h3>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
