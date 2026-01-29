import Background from "../assets/start/start.svg";
import Croco from "../assets/start/crocodile.svg";
import Deer from "../assets/start/deer.svg";
import Dog from "../assets/start/dog.svg";
import Elephant from "../assets/start/elephant.svg";
import Boynofeet from "../assets/start/boynofeet.svg";
import PromptCharacter from "../assets/start/promptcharacter.svg";
import PromptName from "../assets/start/promptname.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Start = () => {
  const [character, setCharacter] = useState<string | null>();
  const [name, setName] = useState<string>("");
  const [next, setNext] = useState<boolean>(false);

  const animals = [
    { name: "deer", src: Deer, color: "yellow" },
    { name: "dog", src: Dog, color: "orange" },
    { name: "elephant", src: Elephant, color: "blue" },
    { name: "crocodile", src: Croco, color: "green" },
  ];

  return (
    <div>
      <div className="w-screen h-screen absolute top-0 left-0 -z-10">
        <img
          src={Background}
          aria-hidden={true}
          className="w-full h-full object-cover"
        />
      </div>
      {!next && (
        <div className="animate-fade-in">
          <div className="flex items-center justify-center ">
            <img src={Boynofeet} alt="NPC" className="relative top-10 left-5" />
            <img
              src={PromptCharacter}
              alt="Please select your character"
              className="relative bottom-15 right-10"
            />
          </div>
          <div className="grid grid-cols-2 p-5 gap-4 white w-[90%] bg-white/50 rounded-2xl m-auto">
            {animals.map((animal) => (
              <img
                key={animal.name}
                src={animal.src}
                alt={animal.name}
                onClick={() => setCharacter(animal.name)}
                className={`cursor-pointer transition-all ${
                  character === animal.name
                    ? "drop-shadow-lg filter brightness-110 rounded-md scale-110"
                    : ""
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              className="bg-orange-300 p-2 px-10 rounded-md text-white font-bold uppercase hover:bg-orange-400 transition-colors"
              onClick={() => setNext(true)}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {next && (
        <div className="animate-fade-in">
          <img src={PromptName} alt="What is your name?" className="m-auto" />
          <div className="w-full items-center justify-center flex">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-80 h-12 top-100 block border p-2 backdrop-blur-md rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex gap-2 items-center justify-center mt-10">
            <button
              className="bg-orange-300 p-2 px-10 rounded-md text-white font-bold uppercase hover:bg-orange-400 transition-colors"
              onClick={() => setNext(false)}
            >
              Back
            </button>
            <Link
              to={name.trim() === "" ? "" : "/map"}
              className="bg-orange-300 p-2 px-10 rounded-md text-white font-bold uppercase hover:bg-orange-400 transition-colors"
            >
              Play
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Start;
