import axios from "axios";

const blizzardOauhtApi = axios.create({
  baseURL: "https://us.battle.net",
});

export { blizzardOauhtApi };
