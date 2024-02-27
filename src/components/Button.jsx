import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-2xl border-[2px] bg-amber-950 border-amber-400 border-solid hover:opacity-[0.7] duration-200'>
            <p>{text}</p>
        </button>
    )
}