import type React from "react";
import FunFactBanner from "../assets/forest/funfactbanner.svg";
import FunFactConvo1 from "../assets/forest/funfactconvo1.svg";
import FunFactConvo2 from "../assets/forest/funfactconvo2.svg";
import FunFactConvo3 from "../assets/forest/funfactconvo3.svg";
import FunFactConvo4 from "../assets/forest/funfactconvo4.svg";
import FunFactNpc from "../assets/forest/funfactnpc.svg";
import PlayBtn from "../assets/forest/playbtn.svg";

const ForestFunFact = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      {currentPage === 4 && (
        <div className="relative bottom-15">
          <img src={FunFactBanner} aria-hidden={true} className="w-full"></img>
          <img
            src={FunFactConvo1}
            aria-hidden={true}
            className="relative bottom-35"
          ></img>
          <img
            src={FunFactNpc}
            aria-hidden={true}
            className="relative bottom-60 npc-think"
          ></img>
        </div>
      )}

      {currentPage === 5 && (
        <div className="relative bottom-15">
          <img src={FunFactBanner} aria-hidden={true} className="w-full"></img>
          <img
            src={FunFactConvo2}
            aria-hidden={true}
            className="relative bottom-35"
          ></img>
          <img
            src={FunFactNpc}
            aria-hidden={true}
            className="relative bottom-60 npc-think"
          ></img>
        </div>
      )}

      {currentPage === 7 && (
        <div className="relative bottom-15">
          <img src={FunFactBanner} aria-hidden={true} className="w-full"></img>
          <img
            src={FunFactConvo3}
            aria-hidden={true}
            className="relative bottom-35"
          ></img>
          <img
            src={FunFactNpc}
            aria-hidden={true}
            className="relative bottom-60 npc-think"
          ></img>
        </div>
      )}

      {currentPage === 9 && (
        <div className="relative bottom-15">
          <img src={FunFactBanner} aria-hidden={true} className="w-full"></img>
          <img
            src={FunFactConvo4}
            aria-hidden={true}
            className="relative bottom-35"
          ></img>
          <img
            src={FunFactNpc}
            aria-hidden={true}
            className="relative bottom-60 npc-think"
          ></img>
        </div>
      )}

      <button
        className="fixed bottom-5 right-10"
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
      >
        <img src={PlayBtn} alt="Play" />
      </button>
    </div>
  );
};
export default ForestFunFact;
