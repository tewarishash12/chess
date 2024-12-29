import React from 'react';
import w_king from "../assets/king_white.png"
import w_queen from "../assets/queen_white.png"
import w_rook from "../assets/rook_white.png"
import w_knight from "../assets/knight_white.png"
import w_bishop from "../assets/bishop_white.png"
import w_pawn from "../assets/pawn_white.png"
import b_king from "../assets/king_black.png"
import b_queen from "../assets/queen_black.png"
import b_rook from "../assets/rook_black.png"
import b_knight from "../assets/knight_black.png"
import b_bishop from "../assets/bishop_black.png"
import b_pawn from "../assets/pawn_black.png"
import Tile from './Tile';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


function ChessBoard() {
    const board =[];
    const pieces = []
    
    for(let i=0;i<8;i++){
        pieces.push({image:b_pawn, x:i, y:1 })
        pieces.push({image:w_pawn, x:i, y:6 })
    }

    for(let i=0;i<8;i++){
        if(i===0 || i===7){
            pieces.push({image:b_rook, x:i, y:0})
            pieces.push({image:w_rook, x:i, y:7})
        } else if(i===1 || i===6){
            pieces.push({image:b_knight, x:i, y:0})
            pieces.push({image:w_knight, x:i, y:7})
        } else if(i===2 || i===5){
            pieces.push({image:b_bishop, x:i, y:0})
            pieces.push({image:w_bishop, x:i, y:7})
        } else if(i===3){
            pieces.push({image:b_queen, x:i, y:0})
            pieces.push({image:w_queen, x:i, y:7})
        } else if(i===4){
            pieces.push({image:b_king, x:i, y:0})
            pieces.push({image:w_king, x:i, y:7})
        }
    }


    for(let i=0;i<verticalAxis.length;i++){
        for(let j=0;j<horizontalAxis.length;j++){
            let image = undefined;

            pieces.forEach((p)=>{
                if(p.y===i && p.x=== j){
                    image=p.image
                }
            })
            board.push(<Tile key={`${i}-${j}`} image={image} isDark={(i+j)%2!==0} horizontalAxis={horizontalAxis[i]} verticalAxis={verticalAxis[j]} />) 

        }
    }
    
    return (
        <div className='grid grid-cols-8 w-[400px] h-[400px] '>{board}</div>
    );
}

export default ChessBoard;
