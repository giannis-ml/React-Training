import { React } from 'react'
import { boardContext } from './include/Include.jsx'

export const Greeting = ({ name }) => (
    <h1>Hello {name}</h1>
)

export const MyButton = ({ pos, label, handleClick }) => (
    <button
        onClick={() => handleClick(pos)}
        style={{ width: 100, height: 100 }}
    >
        {label}
    </button>
);