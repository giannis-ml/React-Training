import { useEffect } from 'react'
import { BoardProvider } from './include/Include.jsx'
import { Board } from './Board.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import { useSelector,useDispatch } from 'react-redux'



function App() {

    const board = useSelector(state => state.board)

    const isXnext = useSelector(state=>state.isXnext)

    const message = useSelector(state=>state.message)

    const winsOfX = useSelector(state => state.xWins)
    const winsOfY = useSelector(state => state.yWins)

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {main:'#ff0000'}
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple:true
                }
            }
        }

    });

    const dispatch = useDispatch()

    const CheckIfGameFinished = () => {

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
                    dispatch({type:"XWIN"})
                else
                    dispatch({type:"YWIN"})
                dispatch({type:"NEWGAME"})
                return;
            }
        }

        if (!board.includes(null)) {
            setTimeout(() => dispatch({ type: "NEWGAME" }), 1000);
            return;
        }

    }

    useEffect(() => {
        CheckIfGameFinished();
    }, [board]);

    const handleClick = (position) => {


        if (board[position]) return;

        dispatch({ type: "SETBOARD", payload: position })

        isXnext ? dispatch({ type: "ISYNEXT" }) : dispatch({type:"ISXNEXT"})

    }

    return (
        <>
            <ThemeProvider theme={darkTheme }>
                <BoardProvider value={{ board, isXnext, handleClick, message }}>
                    <Board />
                    <h2>{winsOfX}:{winsOfY}</h2>
                    </BoardProvider>
            </ThemeProvider>

        </>
    )
}

export default App;
