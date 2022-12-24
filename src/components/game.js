import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import StopWatch from './StopWatch/StopWatch.js';
import SudokuBoard from './SudokuBoard.js';
import { NavLink } from "react-router-dom";
var sudoku = require('sudoku');
const { forwardRef, useRef, useImperativeHandle } = React;

export default function Game() {
    useEffect(() => {


    });

    const StopWatchRef = useRef();
    const SudokuBoardRef = useRef();
    function StartGame() {
        console.log("Start Game!");
        var start = StopWatchRef.current.handleStart();
        var board = SudokuBoardRef.current.FillBoard();
    }

    function StopGame() {
        
        if (SudokuBoardRef.current.CheckSolution()) {
            console.log("Correct!");
            console.log("Time :" + StopWatchRef.current.handleStop())
        } else {
            console.log("Wrong!");
            window.alert("Incorrect solution");
        }
    }

    return (
        <>
            <StopWatch ref={StopWatchRef} />

            <form style={{ marginLeft: 55 }} >
                <label>
                    Name:
                    <input type="text" name="username" style={{ marginLeft: 10 }} />
                </label>
            </form>
            <br />
            <Button variant="primary" style={{ marginLeft: 55 }} size={'lg'} onClick={() => StartGame()}>Start</Button>{''}
            <Button variant="primary" style={{ marginLeft: 10 }} size={'lg'} onClick={() => StopGame()}>Submit</Button>{''}
            <SudokuBoard ref={SudokuBoardRef} />
        </>

    );




}