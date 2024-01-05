import React, {useState} from 'react'


export default function TextForm(props) {
    const [text , setText] = useState('')
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleClear = () =>{
        setText('');
        props.showAlert("Text Cleared!","success")
    }
    const handleCopy =() => {
      navigator.clipboard.writeText(text) // Use clipboard API to copy text
      .then(() => {
        console.log('Text copied to clipboard:', text);
        // Optionally, you can provide feedback to the user here (e.g., show a message)
      })
      props.showAlert("Text has been copied to clipboard!","success")
    }
  return (
   <>
    <div className='container' style={{color: props.mode === `dark` ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === `dark` ? 'grey' : 'white',color: props.mode === `dark` ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
      <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>

    </div>
    <div className='container my-3'  style={{color: props.mode === `dark` ? 'white' : '#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{(0.008 * text.split(' ').length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter your text to preview it here"}</p>
    </div>
   </>
  )
}