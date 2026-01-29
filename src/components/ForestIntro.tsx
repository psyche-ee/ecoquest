import type React from "react";
import ForestBanner from "../assets/forest/forestbanner.svg";
import ForestConvo from "../assets/forest/forestconvo.svg";
import ForestNpc from "../assets/forest/forestnpc.svg";
import ObjectiveBanner from "../assets/forest/objectivebanner.svg";
import ObjectiveConvo from "../assets/forest/objectiveconvo.svg";
import ObjectiveNpc from "../assets/forest/objectivenpc.svg";
import PlayBtn from "../assets/forest/playbtn.svg";

const ForestIntro = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      {currentPage === 1 && (
        <div className="relative bottom-15">
          <img src={ForestBanner} aria-hidden={true} className="w-full"></img>
          <img
            src={ForestConvo}
            aria-hidden={true}
            className="relative bottom-35"
          ></img>
          <img
            src={ForestNpc}
            aria-hidden={true}
            className="relative bottom-60 npc-float"
          ></img>
        </div>
      )}

      {currentPage === 2 && (
        <div className="flex flex-col items-center justify-center">
          <div className="relative bottom-15">
            <img
              src={ObjectiveBanner}
              aria-hidden={true}
              className="w-full"
            ></img>
            <img
              src={ObjectiveConvo}
              aria-hidden={true}
              className="relative bottom-15"
            ></img>
            <img
              src={ObjectiveNpc}
              aria-hidden={true}
              className="relative bottom-20 npc-float"
            ></img>
          </div>
        </div>
      )}

      <button 
        className="fixed bottom-5 right-10"
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
      >
        <img
          src={PlayBtn}
          alt="Play"
        />
      </button>
    </div>
  );
};

export default ForestIntro;
