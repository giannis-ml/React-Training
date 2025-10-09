import { useContext } from 'react'
import { boardContext } from './App.jsx'

const Board = () => {

    const { board } = useContext(boardContext)

    return (
        <>
            <div>
                <Greeting name="John" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                    {board.map((label, i) =>
                        <MyButton
                            key={i}
                            label={label}
                            pos={i}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Board;