import React from "react";

function PokemonMoves(props) {
  return (
    <div className="w-fit h-fit px-1 bg-rose-500 rounded m-1 text-white font-medium">
      {props.moveObject.move.name}
    </div>
  );
}

export default PokemonMoves;
