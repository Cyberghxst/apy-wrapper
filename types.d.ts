class Util {
    getParams(params: any): string
    isValidAnime(key: string): boolean
    isValidImage(key: string): boolean
    isValidJSON(key: string): boolean
}
class Anime {
    get (route: string, params: any): Promise<any>
}
class Json {
    get (route: string, params: any): Promise<any>
}
class Image {
    get (route: string, params: any): Promise<any>
}

interface BASE_ERROR {
    status: number;
    status_text: string;
    error: string;
    details: any;
    success: boolean;
}

interface PARAMS {
    [key: string]: any
}

export { BASE_ERROR, PARAMS }