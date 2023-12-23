import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleTitleClick = () => {
        let arr = text.split(" ");
        let newarr = [];
        arr.forEach((element) => {
            let upText = element.charAt(0).toUpperCase() + element.slice(1);
            newarr.push(upText);
        });
        let newText = newarr.join(" ");
        setText(newText);
        props.showAlert("Converted to Title case!", "success");
    }
    
    const handleSentenceClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Converted to Sentence case!", "success");
    }
    
    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text area cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleText = () => {
        if(text.length > 0){
            setText('');
        }
        else{
            setText('Enter text here')
        }
    }

    const [text, setText] = useState("Enter text here");
    //text  = "new Text";  // Wrong way to change the state
    //setText("new Text"); // Correct wat to change the state
    return (
        <>
        <div className={`container my-3 text-${props.mode==='light' ? 'dark' : 'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} onFocus={handleText} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Convert to Title case</button>
            <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to Sentence case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>

        <div className={`container my-3 text-${props.mode==='light' ? 'dark' : 'light'}`}>
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p>It will take <b>{0.008 * text.split(" ").length}</b> minutes to read the text.</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the above text box to preview here"}</p>
        </div>
        </>
    )
}
