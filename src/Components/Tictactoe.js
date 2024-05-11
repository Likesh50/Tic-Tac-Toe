import React, { useRef, useState } from 'react';
import './Tictactoe.css'
import circlei from './Asset/circle.png'
import crossi from './Asset/cross.png'

let data=["","","","","","","","",""];

const Tictactoe = () => {

    let [count,setCount] =useState(0);
    let [lock,setLock]=useState(false);
    let titleRef=useRef(null);
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [submittedValue1, setSubmittedValue1] = useState('Player 1');
    const [submittedValue2, setSubmittedValue2] = useState('Player 2');

    const [countx, setCountx] = useState(0);
    const [counto, setCounto] = useState(0);


    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);

    let boxarr=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
    

    const toggle = (e,num) =>{
        if(lock){
            return 0
        }
        if(count%2===0)
        {
            e.target.innerHTML=`<img src='${crossi}'> `;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML=`<img src='${circlei}'> `;
            data[num]="o";
            setCount(++count);
        }

        checkWin();
        

    }

    const checkWin=() =>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="" )
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }
    }

    const won=(winner)=>{
        setLock(true);
        if(winner==="x")
        {
            titleRef.current.innerHTML=`Congratulations: ${submittedValue1}`;
            incrementCountx()

        }
        else
        {
            titleRef.current.innerHTML=`Congratulations: ${submittedValue2}`;
            incrementCounto()
        }
    }

    const reset=()=>{
        setLock(false);
        data=["","","","","","","","",""];
        titleRef.current.innerHTML="TIC TAC TOE Game using <span>REACT</span>"
        boxarr.map((e)=>{
            e.current.innerHTML="";
        })
        setCount(0);
    }

    const resetAll=()=>{
        setSubmittedValue1('player 1');
        setSubmittedValue2('player 2');
        setLock(false);
        data=["","","","","","","","",""];
        titleRef.current.innerHTML="TIC TAC TOE Game using <span>REACT</span>"
        boxarr.map((e)=>{
            e.current.innerHTML="";
        })
        setCountx(0)
        setCounto(0)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const value1 = `${input1Value}`;
        const value2 = `${input2Value}`;
        setSubmittedValue1(value1);
        setSubmittedValue2(value2);
        setInput1Value('');
        setInput2Value('');
      };

    const incrementCountx = () => {
        setCountx(prevCount => prevCount + 1);
      };

    const incrementCounto = () => {
        setCounto(prevCount => prevCount + 1);
      };

  return (

            <div>
                <h1 className='title' ref={titleRef}>TIC TAC TOE Game using <span>REACT</span></h1>
            
                    <div className='content'>


                        <div className='con1'>
                            <form className='name'>
                                <input className='input' value={input1Value} placeholder='Player1 - X' onChange={(e) => setInput1Value(e.target.value)}></input><br></br>
                                <input className='input' value={input2Value} placeholder='Player2 - O' onChange={(e) => setInput2Value(e.target.value)} ></input>
                                <br></br>
                                <button  onClick={handleSubmit}>Submit</button>
                            </form> 
                        </div>


                        <div className='con2'>
                            <div className='container'>
                                
                                <div className='board'>
                                    <div className='row1'>
                                        <div className='box' ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                                        <div className='box' ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                                        <div className='box' ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                                    </div>
                                    <div className='row2'>
                                        <div className='box' ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                                        <div className='box' ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                                        <div className='box' ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                                    </div>
                                    <div className='row3'>
                                        <div className='box' ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                                        <div className='box' ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                                        <div className='box' ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <button className='reset' onClick={()=>{reset()}}>Clear</button>
                                <button className='resetall' onClick={()=>{resetAll()}}>Reset</button>
                                </div>
                                
                            </div>
                        </div>


                        <div className='con3'>
                            <div className='table'>
                                <div className='count1'style={{ display: 'flex' }}>
                                    <div style={{ flex: 1 }}>{submittedValue1}</div>
                                    <div style={{ flex: 1 }}>{submittedValue2}</div>
                                </div>
                                <div className='count2'style={{ display: 'flex' }}>
                                    <div style={{ flex: 1 }}>{countx} </div>
                                    <div style={{ flex: 1 }}>{counto}</div>
                                </div>
                            </div>
                        
                        </div>

                    </div>

                </div>
  
)}

export default Tictactoe

