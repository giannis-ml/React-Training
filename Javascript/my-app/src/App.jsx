import { useState, useEffect } from 'react'
import { BoardProvider } from './include/Include.jsx'
import { Board } from './Board.jsx'
import './App.css'



function App() {

    const [board, setBoard] = useState(Array(9).fill(null))

    const [isXnext, setPlayer] = useState(true)

    const [message, setMessage] = useState("O")

    const [finishMessage, setFinishMessage] = useState("")

    const [winsOfX, setWinsOfX] = useState(0)
    const [winsOfY, setWinsOfY] = useState(0)

    const checkIfGameFinished = () => {

        const winningCombinations = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ]

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                if (board[a] === 'x')
                    setWinsOfX(prev => prev + 1);
                else
                    setWinsOfY(prev => prev + 1);
                setFinishMessage(`Winner: ${board[a]}`);
                setTimeout(() => setBoard(Array(9).fill(null)), 1000);
                return;
            }
        }

        if (!board.includes(null)) {
            setFinishMessage("Draw!");
            setTimeout(() => setBoard(Array(9).fill(null)), 1000);
            return;
        }

    }

    useEffect(() => {
        checkIfGameFinished();
    }, [board]);

    const handleClick = (position) => {


        if (board[position]) return;


        const nextBoard = board.slice()
        nextBoard[position] = isXnext ? 'o' : 'x'

        setMessage(isXnext ? "X" : "O")
        setBoard(nextBoard)
        setPlayer(!isXnext)

    }

    return (
        <>
            <BoardProvider value={{ board, isXnext, handleClick, message }}>
                <Board />
                <h2>{winsOfX}:{winsOfY}</h2>
                <h2>{finishMessage}</h2>
            </BoardProvider>
        </>
    )
}

export default App;
