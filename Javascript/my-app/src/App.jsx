import { useState, createContext, useContext } from 'react'
import './App.css'

const boardContext = createContext(null)

const BoardProvider = boardContext.Provider

const Greeting = ({name}) => (
    <h1>Hello {name}</h1>
)

const MyButton = ({ trigger, label }) => (

    <button onClick={trigger} style={{ width: 100,height: 100}}>{label}</button>
)

const Board = () => {

    const {handleClick,board} = useContext(boardContext)

    return (
        <>
            <div>
                <Greeting name="John" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                    {board.map((label, i) =>
                        <MyButton
                            key={i}
                            label={label}
                            trigger={() => {
                                handleClick(i)
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    )
}


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

export default App
