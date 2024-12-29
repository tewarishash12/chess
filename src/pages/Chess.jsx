import React from 'react'
import ChessBoard from '../components/ChessBoard'

function Chess() {
    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-black to-purple-900'>
            <ChessBoard />
        </div>
    )
}

export default Chess