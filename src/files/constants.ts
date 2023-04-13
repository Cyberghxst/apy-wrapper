export default {
    BASE_URL: "https://apy.cyberghxst.ga",
    ERRORS: {
        400: {
            "status": 400,
            "status_text": "Bad request",
            "error": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
            "details": {},
            "success": false
        },
        404: {
            "status": 404,
            "status_text": "Not found",
            "error": "The server didn't get a valid response from the middleaware.",
            "details": {},
            "success": false
        },
        429: {
            "status": 429,
            "status_text": "Too many requests",
            "error": "You have reached the requests limit (30 per minute), chill.",
            "details": {},
            "success": false
        },
        500: {
            "status": 500,
            "status_text": "Internal server error",
            "error": "Something went wrong on the web site's server but the server could not be more specific on what the exact problem was.",
            "details": {},
            "success": false
        }
    }
}