import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import StopWatch from './StopWatch/StopWatch.js';
import SudokuBoard from './SudokuBoard.js';
import ENV from "../config.js";

const { useRef } = React;

export default function Game() {
    const [userName, setUserName] = useState(0);
    useEffect(() => {


    });

    const StopWatchRef = useRef();
    const SudokuBoardRef = useRef();
    function StartGame() {
        console.log("Start Game!");
        StopWatchRef.current.handleStart();
        SudokuBoardRef.current.FillBoard();
    }

    function StopGame() {
        var SudokuBoard = SudokuBoardRef.current.CheckSolution();
        if (JSON.stringify(SudokuBoard) !== JSON.stringify([])) {
            console.log("Correct!");
            var time = StopWatchRef.current.handleStop()
            console.log("Time :" + time)
            const response = fetch(ENV.BACKEND_URL + "/highscore/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "Name": userName, "Time": time, "Sudoku": SudokuBoard }),
            })


            response.then(
                (value) => { 
                    console.log("Response OK!"); 
                    window.alert("Correct!");
                },
                (reason) => {
                    const message = `An error occurred: ${reason}`;
                    window.alert(message);
                    console.log(message);
                    return;
                }
            )
        } else {
            console.log("Wrong!");
            window.alert("Incorrect solution");
        }
    }

    return (
        <div style={{ marginLeft: 55 }} >
            <StopWatch ref={StopWatchRef} />

            <form>
                <label>
                    Name:
                    <input type="text" onInput={e => setUserName(e.target.value)} style={{ marginLeft: 10, marginTop: 20 }} />
                </label>
            </form>
            <br />
            <Button variant="primary" size={'lg'} onClick={() => StartGame()}>Start</Button>{''}
            <Button variant="primary" style={{ marginLeft: 10 }} size={'lg'} onClick={() => StopGame()}>Submit</Button>{''}
            <SudokuBoard ref={SudokuBoardRef} />
        </div>

    );




}