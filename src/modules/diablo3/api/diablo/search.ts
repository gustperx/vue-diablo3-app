import axios from "axios";

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = "https://";
const host = ".api.blizzard.com/";

// https://eu.api.blizzard.com/d3/profile/SuperRambo-2613/?locale=es_ES&access_token=ABC123
const blizzardProfileApi = (region: string) => {
  return axios.create({
    baseURL: `${protocol}${region}${host}`,
  });
};

export { blizzardProfileApi };
