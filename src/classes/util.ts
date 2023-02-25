import endpoints from '../files/endpoints';

/**
 * Makes the class startup.
 */
export default class Util {
    /**
     * 
     * @param params The JSON object of parameters.
     * @returns {string} Formatted parameters into a URL.
     */
    static getParams(params: any): string {
        if (!params) return '';
        let URLParams = new URLSearchParams('');
        let keys = Object.keys(params);
        for (const key of keys) {
            URLParams.set(key, params[key]);
        }
        return `?${URLParams.toString()}`;
    }

    /**
     * 
     * @param key The anime endpoint to look for.
     * @returns {boolean} Returns true if the endpoint was found, else returns false.
     */
    static isValidAnime(key: string): boolean {
        if (!key) return false;
        let res: boolean = false;
        for (const route of endpoints.ANIME) {
            if (key === route) res = true;
        }
        return res;
    }

    /**
     * 
     * @param key The image endpoint to look for.
     * @returns {boolean} Returns true if the endpoint was found, else returns false.
     */
    static isValidImage(key: string): boolean {
        if (!key) return false;
        let res: boolean = false;
        for (const route of endpoints.BUFFER) {
            if (key === route) res = true;
        }
        return res;
    }

    /**
     * 
     * @param key The JSON endpoint to look for.
     * @returns {boolean} Returns true if the endpoint was found, else returns false.
     */
    static isValidJSON(key: string): boolean {
        if (!key) return false;
        let res: boolean = false;
        for (const route of endpoints.JSON) {
            if (key === route) res = true;
        }
        return res;
    }

}