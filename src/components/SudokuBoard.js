import React, { useEffect } from "react";
import "./SudokuBoard.css";
var sudoku = require('sudoku');
const { forwardRef, useRef, useImperativeHandle } = React;



const SudokuBoard = forwardRef((props, ref) => {
    var puzzle
    var solution

    useImperativeHandle(ref, () => ({

        FillBoard() {
            var squares = document.querySelector('#puzzle').childNodes;
            for (let i = 0; i < squares.length; i++) {
                if (puzzle[i] != null) {
                    squares[i].value = puzzle[i] + 1;
                    squares[i].disabled = true;
                }
            };
        },

        CheckSolution() {
            var squares = document.querySelector('#puzzle').childNodes;
            var submission = [];
            for (let i = 0; i < squares.length; i++) {
                submission[i] = squares[i].value - 1;

            };
            if (JSON.stringify(puzzle) === JSON.stringify(solution)) {
            //if (true) {
                return puzzle;
            } else {
                return [];
            };
        }

    }));

    function BuildBoard() {
        const squares = 81
        const puzzleBoard = document.querySelector('#puzzle')
        if (!puzzleBoard.hasChildNodes()) {


            for (let i = 0; i < squares; i++) {
                const inputElement = document.createElement('input')
                inputElement.setAttribute('type', 'text')
                inputElement.setAttribute('inputmode', 'numeric')
                inputElement.setAttribute('min', '0')
                inputElement.setAttribute('max', '9')
                if (
                    ((i % 9 === 0 || i % 9 === 1 || i % 9 === 2) && i < 21) ||
                    ((i % 9 === 6 || i % 9 === 7 || i % 9 === 8) && i < 27) ||
                    ((i % 9 === 3 || i % 9 === 4 || i % 9 === 5) && (i > 27 && i < 53)) ||
                    ((i % 9 === 0 || i % 9 === 1 || i % 9 === 2) && i > 53) ||
                    ((i % 9 === 6 || i % 9 === 7 || i % 9 === 8) && i > 53)
                ) {
                    inputElement.classList.add('odd-section')
                }
                puzzleBoard.appendChild(inputElement)
            }
        }
    }

    useEffect(() => {
        BuildBoard();
        puzzle = sudoku.makepuzzle();
        solution = sudoku.solvepuzzle(puzzle);

    });





    return (
        <>
            <table id="puzzle"></table>
        </>

    );

})

export default SudokuBoard;