import { useState, createContext } from 'react'
import Board from './Board.jsx'
import './App.css'

export const boardContext = createContext(null);
const BoardProvider = boardContext.Provide

const Greeting = ({name}) => (
    <h1>Hello {name}</h1>
)

const MyButton = ({ pos, label, handleClick }) => (
    <button
        onClick={() => handleClick(pos)}
        style={{ width: 100, height: 100 }}
    >
        {label}
    </button>
);


function App() {

    const [board, setBoard] = useState(Array(9).fill(null))

    const [isXnext, setPlayer] = useState(true)

    const handleClick = (position) => {

        if (board[position]) 
            return

        const nextBoard = board.slice()
        nextBoard[position] = isXnext ? 'o' : 'x'

        setBoard(nextBoard)
        setPlayer(!isXnext)
    }

    return (
        <>
            <BoardProvider value={{board,isXnext,handleClick}}>
                    <Board />
            </BoardProvider>
        </>
    )
}

export default App;
