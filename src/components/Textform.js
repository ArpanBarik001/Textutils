import React, {useState}from 'react'

export default function Textform(props) {
    const handeupclick=()=>{
        // console.log("clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
        props.Showalert('success','uppercase enable')
    }
    const handelowclick=()=>{
      let lowtext=text.toLowerCase();
      setText(lowtext)
      props.Showalert('success','lowercase enable')
    }
    const handeclear=()=>{
      let cleartext= " "
      setText(cleartext)
      props.Showalert('success','Text is Cleared')
    }
    // const tooglecolor=()=>{
    //   if(style.color ==='black'){
    //   bstyle({
    //     color:'white',
    //     background:'black'
    //   })
    //   setbtn("Enable Light Mode")
    // }
    // else{
    //   bstyle({
    //     color:'black',
    //     background:'white'
    //   })
    //   setbtn("Enable Dark Mode")
    // }
    // }
    const handleonchange=(event)=>{
        // console.log("on changed");
        setText(event.target.value)
    }
    const[text,setText] = useState("Enter text here");
  //   const[style,bstyle]=useState({
  //     color: 'black',
  //     background: 'white'
  // }
  // );
  // const[btn,setbtn]=useState("Enable Dark Mode")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>{props.heading}</h3>

<div className="input-group">
  <span className="input-group-text">With textarea</span>
  <textarea className="form-control" value={text}  onChange={handleonchange} style={{color:props.mode==='dark'?'white':'black',background:props.mode==='dark'?'grey':'white'}} aria-label="With textarea" rows="6"></textarea>
</div>

<button className="btn btn-primary mx-2 my-3" onClick={handeupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handelowclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handeclear}>Clear Text</button>
{/* <button className="btn btn-primary mx-2" onClick={tooglecolor}>{btn}</button> */}
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Text Summery</h3>
      <p>Text containes {text.split(" ").length} words and {text.length} character.</p>
      <p>{0.008*text.split(" ").length} minutes read.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
