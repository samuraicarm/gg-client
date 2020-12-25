import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [games, SetGames] = useState([
    {
      id: 1,
      name: "Among Trees",
      status: "Play List",
      img: "http://www.innersloth.com/Images/GAMES/AmongUs/promoFinal.jpg",
      platform: "PC",
    },

    {
      id: 2,
      name: "What Remains of Edith Finch",
      status: "Played",
      img: "http://www.giantsparrow.com/games/finch/finch_logo_large.jpg",
      platform: "Switch",
    },

    {
      id: 3,
      name: "Zelda: Breath of the Wild",
      status: "Play List",
      img:
        "https://www.zelda.com/breath-of-the-wild/assets/media/wallpapers/desktop-1.jpg",
      platform: "Switch",
    },
    {
      id: 4,
      name: "The Gardens Between",
      status: "Played",
      img:
        "http://thevoxelagents.com/presskit/the_gardens_between/images/TheGardensBetween-Hello.jpg",
      platform: "iPhone",
    },

    {
      id: 5,
      name: "The Last Campfire",
      status: "Play List",
      img:
        "https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-last-campfire-switch/Switch-TheLastCampfire-hero.jpg",
      platform: "Switch",
    },

    {
      id: 6,
      name: "CyberPunk2077",
      status: "Play List",
      img:
        "https://cdn-l-cyberpunk.cdprojektred.com/gallery/1080p/screen-Cyberpunk2077-Outnumbered_But_Not_Outgunned-RGB-en.jpg",
      platform: "Xbox",
    },
    {
      id: 7,
      name: "Call of Duty: Black Ops Cold War",
      status: "Play List",
      img:
        "https://www.dsogaming.com/wp-content/uploads/2020/10/Call-of-Duty-Black-Ops-Cold-War-Header.jpg",
      platform: "Playstation",
    },
  ]);
  return (
    <GameContext.Provider value={[games.setGames]}>
      {props.children}
    </GameContext.Provider>
  );
};
