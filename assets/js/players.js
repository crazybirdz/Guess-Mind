import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const players = document.getElementById("js-players");
const notifs = document.getElementById("js-notifs");

export const handlePlayerUpdate = ({ sockets }) => {
  players.innerHTML = "";
  sockets.forEach((socket) => {
    const playerElement = document.createElement("div");
    playerElement.innerText = `${socket.nickname} : ${socket.score}`;
    players.appendChild(playerElement);
  });
};

const setNotif = (text = "") => {
  notifs.innerText = text;
};

export const handleGameStarted = () => {
  setNotif();
  enableChat();
  disableCanvas();
  hideControls();
};

export const handleLeaderNotif = ({ word }) => {
  setNotif(`You are the leader. Paint: ${word}`);
  disableChat();
  enableCanvas();
  showControls();
};

export const handleGameEnded = () => {
  setNotif("Game ended");
  enableChat();
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => setNotif("Game will start soon");
