import fetch from 'node-fetch';
import constants from '../files/constants';
import Util from './util';

/**
 * Makes the class startup.
 */
class Anime {
    /**
     * 
     * @param route The anime route name.
     * @param params Route parameters inside an object.
     */
    static async get (route: string, params: any): Promise<any> {
        if (!Util.isValidAnime(route)) throw new Error('[APY WRAPPER] :: The provided anime endpoint route is invalid.');
        if (!params || typeof params !== 'object') throw new Error('[APY WRAPPER] :: Invalid parameters provided.');
        let pms: string = Util.getParams(params);
        let url = `${constants.BASE_URL}/anime/${route.toLowerCase()}${pms}`;
        const response = await fetch(url).catch(e => null);
        if (response && response.status == 400) throw new Error(constants.ERRORS[400].error);
        if (response && response.status == 404) throw new Error(constants.ERRORS[404].error);
        if (response && response.status == 429) throw new Error(constants.ERRORS[429].error);
        if (response && response.status !== 200) throw new Error(constants.ERRORS[500].error);
        if (!response) throw new Error(constants.ERRORS[500].error);
        let res = await response.json();
        return res;
    }
}