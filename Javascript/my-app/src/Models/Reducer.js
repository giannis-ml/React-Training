
const XWIN = "XWIN"

const YWIN = "YWIN"

const ISXNEXT = "ISXNEXT"

const ISYNEXT = "ISYNEXT"

const SETBOARD = "SETBOARD"

const NEWGAME = "NEWGAME"

const initialState = {
    board: Array(9).fill(null),
    xWins: 0,
    yWins: 0,
    isXnext: true,
    message: "Now Playing: O"
}

const reducer = (state=initialState, action) => {
    switch (action.type) {

        case SETBOARD:
        {

            const nextBoard = state.board.slice();
            nextBoard[action.payload] = state.isXnext ? 'o' : 'x';

            return {
                ...state,
                board: nextBoard
            };
        }

        case XWIN:
            return { ...state, xWins: state.xWins + 1, message: "Winner: X" };

        case YWIN:
            return { ...state, yWins: state.yWins + 1, message: "Winner: O" };

        case ISXNEXT:
            return { ...state, isXnext: true, message: "Now Playing: O" };

        case ISYNEXT:
            return { ...state, isXnext: false, message: "Now Playing: X" };

        case NEWGAME:
            return {
                ...state,
                board: Array(9).fill(null),
                isXnext: true
            };

        default:
            return state;
    }
}

export default reducer;