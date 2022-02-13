import axios, { type AxiosResponse } from "axios";

// Insterfaces
import type { ProfileAccount } from "../../interfaces/profileAccount";
import type { profileAccountParams } from "../../interfaces/profileAccountStore";

// Útil de regiones, que nos devolverá el 'locale' por defecto correspondiente a cada región
// import { locales } from "@/helpers/regions";

// Store
import { useOauthStore } from "../../stores/oauth";

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = "https://";
const host = ".api.blizzard.com/";

// https://eu.api.blizzard.com/d3/profile/SuperRambo-2613/?locale=es_ES&access_token=ABC123

/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * Los parámetros que hemos obtenido a través de la URL
 *  - @param region {String}
 *  - @param account {String}
 * @returns {Promise}
 */
const getApiAccount = (
  accountParams: profileAccountParams
): Promise<AxiosResponse<ProfileAccount>> => {
  // Recurso de la API al que queremos acceder
  const resource = `d3/profile/${accountParams.account}/`;
  // API URL completa
  const API_URL = `${protocol}${accountParams.region}${host}${resource}`;
  // Locale
  // const locale: string = locales[region] ? locales[region] : "en_US";
  const locale = "en_US";

  const store = useOauthStore();

  if (!store.token) {
    throw new Error("token is empty");
  }

  // Parámetros:
  // - Token de acceso (recuperado desde Pinia)
  // - Locale
  const params = {
    access_token: store.token,
    locale,
  };

  // Retornamos el resultado de hacer la llamada a la API, es decir, una promesa
  // que controlaremos (éxito / error) desde el componente
  return axios.get<ProfileAccount>(API_URL, { params });
};

export { getApiAccount };
