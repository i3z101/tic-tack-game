import React, { Fragment, useEffect, useState } from "react";
import {AiOutlineClose, AiFillTrophy} from 'react-icons/ai'
import {BiCircle} from 'react-icons/bi';
import {SiFacepunch} from 'react-icons/si';
import io from 'socket.io-client';
import {useRouter} from "next/router";

const GAME_GRID = [0,1,2,3,4,5,6,7,8];
const GAME_GRID_LENGTH = GAME_GRID.length;
const socket = io("http://localhost:8000");
let timer;

const Game = ({gameId, visitor}) => {
    const  route = useRouter();
    const [shapes, setShapes] = useState([]);
    const [user, setUser] = useState(!visitor ? 0 : 1);
    const [turn, setTurn] = useState(0);
    const [start, setStart]= useState(!visitor ? false : true);
    const [resultInfo, setResult] = useState({
        showResult: false,
        result: 3
    });
    const [isMobile, setIsMobile] = useState(false);
    const [countTimer, setTimer] = useState(0);
    const [copyText, setCopyText] = useState("CLICK TO COPY")
    const addShape = (index, user) => {
        if(user == 0) {
            if(shapes[index] == undefined) {
                shapes[index] = {
                    user: user,
                    value: 0,
                    icon: <AiOutlineClose size={70} color="black" />
                }
                checkWinner(0);
                // setUser(1);
            }
        }else {
            if(shapes[index] == undefined){
                shapes[index] = {
                    user: user,
                    value: 1,
                    icon: <BiCircle size={70} color="black" />
                }
                checkWinner(1);
                // setUser(0);
            }
        }
    }
    
    const checkWinner = (user) => {
        let i=0;
        if(user == 0) {
            for(i; i < GAME_GRID_LENGTH; i++){
                switch(i) {
                    case 0:
                        if(shapes[i] && shapes[i].value == 0 && shapes[i+1] && shapes[i+1].value == 0 && shapes[i+2] && shapes[i+2].value == 0) {
                                // clearCountTimer(0)
                                socket.emit("finish", {result:user, gameId:gameId})
                                return
                        }else if(shapes[i] && shapes[i].value == 0 && shapes[i+3] && shapes[i+3].value == 0 && shapes[i+6] && shapes[i+6].value == 0) {
                                // clearCountTimer(0)
                                socket.emit("finish", {result:user, gameId:gameId})
                                return
                        }else if(shapes[i] && shapes[i].value == 0 && shapes[i+4] && shapes[i+4].value == 0 && shapes[i+8] && shapes[i+8].value == 0) {
                                // clearCountTimer(0)
                                socket.emit("finish", {result:user, gameId:gameId})
                                return
                        }
                        break;
                    case 1:
                        if(shapes[i] && shapes[i].value == 0 && shapes[i+3] && shapes[i+3].value == 0 && shapes[i+6] && shapes[i+6].value == 0) {
                            // clearCountTimer(0)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return
                        }
                        break;
                    case 2:
                        if(shapes[i] && shapes[i].value == 0 && shapes[i+2] && shapes[i+2].value == 0 && shapes[i+4] && shapes[i+4].value == 0) {
                            // clearCountTimer(0)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return
                        }else if(shapes[i] && shapes[i].value == 0 && shapes[i+3] && shapes[i+3].value == 0 && shapes[i+6] && shapes[i+6].value == 0) {
                            // clearCountTimer(0)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return
                        }
                        break;
                    case 3:
                        if(shapes[i] && shapes[i].value == 0 && shapes[i+1] && shapes[i+1].value == 0 && shapes[i+2] && shapes[i+2].value == 0) {
                            // clearCountTimer(0)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return
                        }
                        break;
                    case 6:
                        if(shapes[i] && shapes[i].value == 0 && shapes[i+1] && shapes[i+1].value == 0 && shapes[i+2] && shapes[i+2].value == 0) {
                            // clearCountTimer(0)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return
                        }
                        break;
                }
            }
        }else if(user == 1) {
            for(i; i < GAME_GRID_LENGTH; i++){
                switch(i) {
                    case 0:
                        if(shapes[i] && shapes[i].value == 1 && shapes[i+1] && shapes[i+1].value == 1 && shapes[i+2] && shapes[i+2].value == 1) {
                                // clearCountTimer(1)
                                socket.emit("finish", {result:user, gameId:gameId})
                                return;
                        }else if(shapes[i] && shapes[i].value == 1 && shapes[i+3] && shapes[i+3].value == 1 && shapes[i+6] && shapes[i+6].value == 1) {
                                // clearCountTimer(1)
                                socket.emit("finish", {result:user, gameId:gameId})
                                return;
                        }else if(shapes[i] && shapes[i].value == 1 && shapes[i+4] && shapes[i+4].value == 1 && shapes[i+8] && shapes[i+8].value == 1) {
                                // clearCountTimer(1)
                                socket.emit("finish", {result:user, gameId:gameId})
                                return;
                        }
                        break;
                    case 1:
                        if(shapes[i] && shapes[i].value == 1 && shapes[i+3] && shapes[i+3].value == 1 && shapes[i+6] && shapes[i+6].value == 1){
                            // clearCountTimer(1)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return;
                        }
                        break;
                    case 2:
                        if(shapes[i] && shapes[i].value == 1 && shapes[i+2] && shapes[i+2].value == 1 && shapes[i+4] && shapes[i+4].value == 1) {
                            // clearCountTimer(1)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return;
                        }else if(shapes[i] && shapes[i].value == 1 && shapes[i+3] && shapes[i+3].value == 1 && shapes[i+6] && shapes[i+6].value == 1) {
                            // clearCountTimer(1)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return;
                        }
                        break;
                    case 3:
                        if(shapes[i] && shapes[i].value == 1 && shapes[i+1] && shapes[i+1].value == 1 && shapes[i+2] && shapes[i+2].value == 1) {
                            // clearCountTimer(1)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return;
                        }
                        break;
                    case 6:
                        if(shapes[i] && shapes[i].value == 1 && shapes[i+1] && shapes[i+1].value == 1 && shapes[i+2] && shapes[i+2].value == 1) {
                            // clearCountTimer(1)
                            socket.emit("finish", {result:user, gameId:gameId})
                            return;
                        }
                        break;
                }
            }
        }
        if(shapes.length == 9 && !shapes.includes(undefined)){
            clearCountTimer(2)
            socket.emit("finish", {result: 2, gameId:gameId})
        }
    }

    const timerHandler = () => {
       timer = setTimeout(() => {
            setTimer(countTimer + 1);
        }, 1000);
    }

    const clearCountTimer = (result) => {
        clearTimeout(timer);
        setResult({
            showResult: true,
            result: result
        });
        return timer;
    }
    

    const playAgainButton = () => {
        for(let x=0; x < GAME_GRID_LENGTH; x++){
           shapes.pop();
        }
        setTimer(0);
        setTurn(0);
        setResult({
            result: 3,
            showResult: false,
        });
    }

    const copyTextBtn = () => {
        const gameIdUrl = document.querySelector("#game_id");
        navigator.clipboard.writeText(gameIdUrl.textContent).then(()=>{
            setCopyText("COPIED!")
            setTimeout(() => {
                setCopyText("CLICK TO COPY")
            }, 800);
        });
        
    }

    useEffect(()=> {
       if(visitor != null || start) {
           timerHandler()
       }
        // timerHandler()
    }, [countTimer, start])

    useEffect(()=>{
        const gameContainer = document.querySelector(".game_container");
        if(gameContainer != null){
            gameContainer.style.display="block"
            gameContainer.classList.add("animate__backInUp");
        }
        socket.emit("joinRoom", {gameId});
    }, []);

    useEffect(()=> {
        if(!visitor){
            socket.on("startTimer", ()=> {
                setStart(true);
            })
        }
        socket.on("done", (args)=> {
            addShape(args.index, args.user);
            setTurn(args.user == 0 ? 1 : 0);
        })

        socket.on("finishGame", (args)=> {
            clearCountTimer(args.result, true)
        })

        socket.on("playAgain", ()=> {
            playAgainButton();
        })
    }, [socket])

    useEffect(()=>{
        if(window.screen.width < 735) {
            setIsMobile(true)
        }
    }, [isMobile])


    
    
   return<section style={{display:'none'}} className="game_container">
        <div className="game_info">
            <p className="turn_text">Room id: <span style={{color:'yellow'}}> {gameId} </span></p>
            <p className="turn_text">Turn: <span style={{color:'yellow'}}> {turn == 0 ? 'X' : 'O'} </span></p>
            <p className="timer">Timer: <span style={{color:'yellow'}}>{countTimer}s</span></p>
            {/* <div style={{display:'flex', flexDirection:'column'}}> */}
                <p className="turn_text" style={{marginTop: isMobile && '1rem', fontSize: isMobile ? '12px' : '16px'}}>GAME URL: <span  id="game_id" style={{color:'yellow'}}>{"http://localhost:3000" + route.asPath+"?visitor=true"}</span></p>
                <button className="copy_text" onClick={copyTextBtn}>{copyText}</button>
            {/* </div> */}
        </div>
       {start ? <Fragment> <section className="grid_container">
            {GAME_GRID.map((grid, index)=> (
                <div key={index} className="grid_item" id={index.toString()} onClick={()=>{
                    addShape(index, user);
                    socket.emit("play", {index: index, user: user, gameId: gameId});
                    setTurn(turn == 0 ? 1 : 0);
                    }}>
                    {shapes.map((shape, idx)=> (
                        index == idx && <div key={index} className="shape_icon animate__backInDown"> {shape != undefined && shape.icon}</div>
                    ))}
                </div>
            ))}
        </section>
        <section style={{backgroundColor: resultInfo.result == 0 || resultInfo.result == 1 ?  "#7FC8A9" : resultInfo.result == 2 ? "#39A2DB" : "transparent"}} className={resultInfo.showResult ? "results show_result" : "results hide_result" }>
            <h2 className="timer_result">Game finished in {countTimer}s</h2>
            {resultInfo.result == 0 || resultInfo.result == 1 ? 
                <AiFillTrophy size={100} color="white"/>
            :   <SiFacepunch size={100} color="white" />
            }
            <div>
                {resultInfo.result == 0 ? 
                    <p className="result_text">X WINS</p>
                : resultInfo.result == 1 ? 
                    <p className="result_text">O WINS</p>
                :   <p className="result_text">Tie</p>
                }
            </div>
            <button onClick={()=>{
                // playAgainButton();
                socket.emit("playAgain", {gameId});
            }} className="play_again_btn">Play again ? </button>
        </section>
        </Fragment>
        : <Fragment>
            <p className="wait_text">WAIT FOR THE COMPETITOR TO JOIN...</p>
        </Fragment> }

   </section>
}

export default Game;