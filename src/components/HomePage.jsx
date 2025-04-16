import React, { useContext } from "react";
import MyContext from "../context/data/MyContext";

const HomePage = () => {
  const Context = useContext(MyContext);
  const { search, setSearch, filtered, loading, setLoading } = Context;
  return (
    <div className="relative min-h-screen bg-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">
        Pokémon
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="w-full max-w-md px-4 py-2 border shadow-sm outline-none rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <img
          className="absolute w-[27vw] top-[16vw] left-1/2 -translate-x-1/2"
          src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif"
          alt=""
        />
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filtered.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-blue-100 border-[1px] border-grey-100 p-4 rounded-xl shadow flex flex-col items-center"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 mb-2"
              />
              <h2 className="font-semibold">
                <span className="text-sm">#{pokemon.id}</span>
                <span className="uppercase ml-1">{pokemon.name}</span>
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-medium mt-40">
          No Pokémon found.
        </p>
      )}
    </div>
  );
};

export default HomePage;
