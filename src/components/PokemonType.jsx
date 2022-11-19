import React from "react";

function PokemonType(props) {
  return (
    <>
      <div className=" w-fit h-fit px-1 text-white font-medium rounded bg-green-400 m-1">
        {props.typeObj.type.name}
      </div>
    </>
  );
}

export default PokemonType;
