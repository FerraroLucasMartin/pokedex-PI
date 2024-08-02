import React from "react";
import { TypesContainer, Type } from "./CardStyles";

export const Card = ({ pokeName, pokeImg, types, onSearch }) => {
  const mayusPokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

  const typesMap = () => {
    if (Array.isArray(types)) {
      return types.map((element) => {
        return (
          <Type
            className='bg-white rounded-sm p-2'
            key={element.type.name}
            type={element.type.name}
          >
            {element.type.name.charAt(0).toUpperCase() +
              element.type.name.slice(1)}
          </Type>
        );
      });
    } else return <Type type={types}>{types}</Type>;
  };

  return (
    <div
      className='w-full h-fit flex-row  gap-12 md:justify-start md:gap-24 md:px-24 bg-blue-100 rounded-lg shadow-md flex md:flex-col items-center p-4 transition-transform duration-200 ease-in-out hover:scale-95 cursor-pointer'
      onClick={() => onSearch(pokeName, true)}
    >
      <img className='size-24 ' src={pokeImg} alt='' />

      <div className='flex flex-col justify-start items-start'>
        <h3 className=' font-pressStart '>{mayusPokeName}</h3>
        <div className='h-fit w-fit flex gap-2 m-2'>{typesMap()}</div>
      </div>
    </div>
  );
};
