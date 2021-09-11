import HomeSound from "../sounds/home.mp3";
import TimeSound from "../sounds/time.mp3";
import WaterSound from "../sounds/water.mp3";
import ChildSound from "../sounds/child.mp3";
import WorldSound from "../sounds/world.mp3";
import SchoolSound from "../sounds/school.mp3";
import StudentSound from "../sounds/student.mp3";
import FamilySound from "../sounds/family.mp3";

import HomeImage from "../images/home.jpg";
import TimeImage from "../images/time.png";
import WaterImage from "../images/water.png";
import ChildImage from "../images/child.png";
import WorldImage from "../images/world.png";
import SchoolImage from "../images/school.png";
import StudentImage from "../images/student.png";
import FamilyImage from "../images/family.png";

import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

function Sound(source, volume, loop) {
  this.source = source;
  this.volume = volume;
  this.loop = loop;
  var son;
  this.son = son;
  this.finish = false;
  this.stop = function () {
    document.body.removeChild(this.son);
  };
  this.start = function () {
    if (this.finish) return false;
    this.son = document.createElement("embed");
    this.son.setAttribute("src", this.source);
    this.son.setAttribute("hidden", "true");
    this.son.setAttribute("volume", this.volume);
    this.son.setAttribute("autostart", "true");
    this.son.setAttribute("loop", this.loop);
    document.body.appendChild(this.son);
  };
  this.remove = function () {
    document.body.removeChild(this.son);
    this.finish = true;
  };
  this.init = function (volume, loop) {
    this.finish = false;
    this.volume = volume;
    this.loop = loop;
  };
}

const CardList = (props) => {
  const [cards, setCards] = useState([
    {
      isMatched: false,
      icon: HomeImage,
      sound: HomeSound,
      tr: { text: "Ev", id: 0, isOpened: false },
      en: { text: "Home", id: 1, isOpened: false },
    },
    {
      isMatched: false,
      sound: TimeSound,
      icon: TimeImage,
      tr: { text: "Zaman", id: 2, isOpened: false },
      en: { text: "Time", id: 3, isOpened: false },
    },
    {
      isMatched: false,
      sound: WaterSound,
      icon: WaterImage,
      tr: { text: "Su", id: 4, isOpened: false },
      en: { text: "Water", id: 5, isOpened: false },
    },
    {
      isMatched: false,
      sound: ChildSound,
      icon: ChildImage,
      tr: { text: "Çocuk", id: 6, isOpened: false },
      en: { text: "Child", id: 7, isOpened: false },
    },
    {
      isMatched: false,
      sound: WorldSound,
      icon: WorldImage,
      tr: { text: "Dünya", id: 8, isOpened: false },
      en: { text: "World", id: 9, isOpened: false },
    },
    {
      isMatched: false,
      sound: SchoolSound,
      icon: SchoolImage,
      tr: { text: "Okul", id: 10, isOpened: false },
      en: { text: "School", id: 11, isOpened: false },
    },
    {
      isMatched: false,
      sound: StudentSound,
      icon: StudentImage,
      tr: { text: "Öğrenci", id: 12, isOpened: false },
      en: { text: "Student", id: 13, isOpened: false },
    },
    {
      isMatched: false,
      sound: FamilySound,
      icon: FamilyImage,
      tr: { text: "Aile", id: 14, isOpened: false },
      en: { text: "Family", id: 15, isOpened: false },
    },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const [cardElements, setCardElements] = useState([]);

  const [cardAllignment, setCardAllignment] = useState(
    createCardAllignment(cards.length * 2)
  );

  useEffect(
    () => setCardElements(createCardElements(cards, cardAllignment)),
    [cards, selectedCards]
  );

  useEffect(() => {
    if (selectedCards.length == 2) {
      if (selectedCards[0] == selectedCards[1]) {
        const index = cards.indexOf(selectedCards[0]);
        let copyList = [...cards];
        copyList[index].isMatched = true;
        setCards(copyList);
        setSelectedCards([]);
        const sound = new Sound(selectedCards[0].sound, 100, false);
        sound.start();

        if (
          cards.every((card) => {
            return card.isMatched;
          })
        ) {
          props.setScreen("end-game");
        }
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
      props.setMoves(props.moves + 1);
    }
  }, [selectedCards]);

  function createCardElements(list, cardAllignment) {
    let allCardElements = [];
    list.map((cardCouple) => {
      allCardElements.push(
        <Card
          cardObj={cardCouple}
          key={cardCouple.tr.id}
          coupleId={cardCouple.en.id}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          text={cardCouple.tr.text}
        ></Card>
      );
      allCardElements.push(
        <Card
          cardObj={cardCouple}
          key={cardCouple.en.id}
          coupleId={cardCouple.tr.id}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          text={cardCouple.en.text}
        ></Card>
      );
    });

    const shuffledCardElements = [];

    for (let i = 0; i < allCardElements.length; i++) {
      shuffledCardElements[i] = allCardElements[cardAllignment[i]];
    }

    return shuffledCardElements;
  }

  function createCardAllignment(listLength) {
    const unShuffledAllignment = [...Array(listLength).keys()];
    const shuffledAllignment = [];
    for (let i = 0; i < listLength; i++) {
      const index = Math.floor(Math.random() * unShuffledAllignment.length);
      shuffledAllignment.push(unShuffledAllignment[index]);
      unShuffledAllignment.splice(index, 1);
    }

    return shuffledAllignment;
  }

  return <div className="card-list">{cardElements}</div>;
};

export default CardList;
