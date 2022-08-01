import React, {useState} from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("handleUpClick is clicked");
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Uppercase.", "success");
    }
    const handleLowClick = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
       props.showAlert("Converted into Lowercase.", "success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared.", "success");
    }
    const handleReverseClick = ()=>{
           let newText = Text.split(" ");
           let another = newText.reverse();
           let fresh = another.join(" ");
           setText(fresh);
           props.showAlert("Text has been reversed.", "success");
    }
    const handleExtraSpace = ()=>{
        let newText = Text.split(/[ ]+/);
        let anotherText = newText.join(" ");
        setText(anotherText);
        props.showAlert("Extra spaces are gone.", "success");
    }
    const handleUpChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    const [Text, setText] = useState("Enter your text here.");
  return (
    <>
   
    <h3 className="my-3" style={{color: props.mode ==='light'?'black':'white'}}>{props.box}</h3>
    <div className="my-3"  >
    <textarea className="form-control" value={Text} onChange = {handleUpChange} id="mybox" rows="8"  style={{backgroundColor: props.mode ==='light'?'white':'black', color: props.mode ==='light'?'black':'white'}} ></textarea>
    <button className="btn  my-4 mx-2" disabled={Text.length===0}  style={{color: props.mode ==='light'?'white':'black',backgroundColor: props.mode ==='light'?'black':'white'}} onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn  my-4 mx-2" disabled={Text.length===0} style={{color: props.mode ==='light'?'white':'black',backgroundColor: props.mode ==='light'?'black':'white'}} onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn  my-4 mx-2" disabled={Text.length===0} style={{color: props.mode ==='light'?'white':'black',backgroundColor: props.mode ==='light'?'black':'white'}} onClick={handleClearClick}>Clear Text</button>
    <button className="btn   my-4 mx-2" disabled={Text.length===0} style={{color: props.mode ==='light'?'white':'black',backgroundColor: props.mode ==='light'?'black':'white'}} onClick={handleReverseClick}>Reverse Text</button>
    <button className="btn   my-4 mx-2" disabled={Text.length===0} style={{color: props.mode ==='light'?'white':'black',backgroundColor: props.mode ==='light'?'black':'white'}} onClick={handleExtraSpace}>Remove Extra Space</button>
  </div>
  <div className="container my-3" disabled={Text.length===0}  style={{color: props.mode ==='light'?'black':'white'}}>
    <h2>Analysis</h2>
    <h4>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters.</h4>
    <h4>{0.08*Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes.</h4>
  </div>
  <div className="container my-4"  style={{color: props.mode ==='light'?'black':'white'}}>
    <h2>Summary</h2>
    <p>{Text.length>0?Text:"Enter your text above."}</p>
  </div>
  </>
  );
}
