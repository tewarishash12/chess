import React from 'react';
import Tile from './Tile';
import { useSelector } from 'react-redux';

function ChessBoard() {
    const boardState = useSelector((state) => state.game.board);
    const currentTurn = useSelector((state) => state.game.turn);

    return (
        <div className="flex flex-col items-center">
            {/* Display Current Turn */}
            <div className="mb-4 text-lg font-semibold">
                <span className="text-yellow-400">Current Turn:</span>{' '}
                <span className="text-cyan-300">{currentTurn}</span>
            </div>
            {/* Chessboard Grid */}
            <div className="grid grid-cols-8 w-[400px] h-[400px]">
                {boardState.map((row, rowIndex) =>
                    row.map((tile, colIndex) => (
                        <Tile
                            key={`${rowIndex},${colIndex}`}
                            isDark={(rowIndex + colIndex) % 2 !== 0}
                            image={tile?.img || null}
                            position={boardState[rowIndex][colIndex].boxNotation}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default ChessBoard;
