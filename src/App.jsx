import React, { useEffect } from "react";
import { useState } from "react";
import PokemonType from "./components/PokemonType";
import PokemonMoves from "./components/PokemonMoves";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

function Axios() {
  const [num, setNum] = useState(1);
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        await setPokemonData(res);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [num, ""]);

  return (
    <div className="w-full  flex items-center  flex-col font-sans text-slate-700">
      <h1 className="font-bold text-3xl m-2">Pokemon Info</h1>
      <div className=" w-full h-28 flex items-center justify-center  m-2 bg-slate-700">
        <ChevronLeftIcon
          onClick={() => {
            if (num > 1) {
              setNum(num - 1);
            }
          }}
          className="h-6 w-6 text-white hover:text-green-400 font-bold"
        />
        <div className="w-fit h-6  rounded mx-3 text-3xl font-medium  flex items-center justify-center text-yellow-300">
          {pokemonData ? pokemonData.data.name : "bulbasaur"}
        </div>
        <ChevronRightIcon
          onClick={() => {
            setNum(num + 1);
          }}
          className="h-6 w-6 text-white hover:text-green-400"
        />
      </div>

      <div className=" flex justify-center items-center sm:items-start flex-col sm:flex-row px-2 rounded w-full">
        <div
          className=" border w-full h-72 sm:w-[40%]  mx-2 grid place-items-center bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url('${
              pokemonData
                ? pokemonData.data.sprites.other.dream_world.front_default
                : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            } ')`,
          }}
        ></div>

        <div className="flex items-center flex-col w-full sm:w-[60%] border">
          <div className="flex justify-start flex-col  w-full mb-1">
            <div className="text-sm font-medium">Pokemon Type:</div>
            <div className="w-full flex flex-wrap justify-center">
              {pokemonData
                ? pokemonData.data.types.map((currentValue, index) => {
                    //console.log(currentValue);
                    return <PokemonType typeObj={currentValue} key={index} />;
                  })
                : "none"}
            </div>
          </div>
          <div className="w-full h-fit ">
            <div className="text-sm font-medium">Moves:</div>
            <div className="flex justify-center items-center flex-wrap overflow-x-hidden">
              {pokemonData
                ? pokemonData.data.moves.map((currentValue, index) => {
                    // console.log(currentValue);
                    return (
                      <PokemonMoves moveObject={currentValue} key={index} />
                    );
                  })
                : "none"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Axios;
