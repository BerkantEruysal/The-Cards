import React, { useEffect, useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";

const Card = ({
  cardObj,
  id,
  coupleId,
  selectedCards,
  setSelectedCards,
  playSound,
  text,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const openCard = function () {
    if (selectedCards.length != 2 && !isOpened && !cardObj.isMatched) {
      setIsOpened(true);
      setSelectedCards([...selectedCards, cardObj]);
    }
  };
  useEffect(() => {
    if (
      (selectedCards[0] != cardObj && selectedCards[1] != cardObj) &
      !cardObj.isMatched
    ) {
      setIsOpened(false);
    }
  }, [selectedCards]);

  return (
    <div
      className={`card ${cardObj.isMatched ? "matched" : ""}`}
      onClick={openCard}
    >
      {isOpened ? (
        <FrontFace text={text} image={cardObj.icon}></FrontFace>
      ) : (
        <BackFace></BackFace>
      )}
    </div>
  );
};

export default Card;
