import React from "react";

const Tile = ({ tileWord,click,tile_Id,tileIndexes}) => {
   return (Array.isArray(tileIndexes)) && tileIndexes.includes(tile_Id) ? (
      <button className="bg-green-200  w-1/2 rounded-lg p-4 py-12 m-auto text-gray-500">
        {tileWord}
      </button>
    ) : (
           <button className="bg-yellow-200  w-1/2 rounded-lg p-4 py-12 m-auto text-gray-500"
                    onClick = {click}
           >
        {tileWord}
      </button>
    );  
};

export default Tile;
