import React from 'react';
import Tile from './Tile';
import { useSelector } from 'react-redux';

function ChessBoard() {
    const boardState = useSelector((state) => state.game.board);
    return (
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
    );
}

export default ChessBoard;
