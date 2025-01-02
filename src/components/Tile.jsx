import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectPiece, dropPiece, pawn_movement } from '../slices/gameSlice';

function Tile({ position, isDark, image }) {
    const dispatch = useDispatch();
    const selectedPosition = useSelector((state) => state.game.selectedPosition);
    const dropPosition = useSelector((state)=> state.game.dropPosition);
    const selectedPiece = useSelector((state)=>state.game.piece);

    function pieceMovement(selectedPiece){
        switch (selectedPiece) {
            case "w_pawn":
            case "b_pawn":
                dispatch(pawn_movement())
                break;
        
            default:
                break;
        }
    }

    function handleClick(position) {
        if (selectedPosition === null) {
            dispatch(selectPiece({position}));
        } else {
            dispatch(dropPiece({position}));
            if(dropPosition)
                console.log("Do I enter with empty dropPositon: ", dropPosition)
                pieceMovement(selectedPiece);
        }
    }

    return (
        <div onClick={() => handleClick(position)} className={`w-[50px] h-[50px] ${isDark ? 'bg-green-700' : 'bg-gray-200'} flex items-center justify-center`}>
            {image && <img src={image} alt="chess piece" className="chess-piece" />}
        </div>
    );
}

export default Tile;
