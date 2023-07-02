const axios = require('axios');

class API {
    /** 
     * HTTP lib for network requests 
     * @prop http 
     */
    _http = '';

    /**
     * Base class constructor
     * @param {string=} url - Optional url to override default assignment
     * @param {any=} http - Optional http to override default assignment
     * @return void
     */
    constructor(http=null) {
        this._http = null !== http ? http : axios;
    }
}

module.exports = API;
