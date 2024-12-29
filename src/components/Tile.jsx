import React from 'react'

function Tile({ horizontalAxis,verticalAxis,isDark, image }) {
    return (
        <div className={`w-[50px] h-[50px] ${isDark ?  "bg-green-700" : "bg-gray-200" } flex items-center justify-center `}> 
            {/* [{horizontalAxis},{verticalAxis}]  */}
            {image && <img src={image} alt="" />}
        </div>
    )
}

export default Tile