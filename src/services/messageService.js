export default class MessageService  {
    constructor () {
        this._apiBase = 'https://type.fit/api/quotes'
    }

    getResource = async (id) => {
        return fetch(`${this._apiBase}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            return data;
        })
    }

    // getTenRandomMessage = async () => {
    //     const res = await this.getResource();
    //     const min = Math.floor(Math.random() * 100);
    //     const result = res.slice(min, min + 10);
    //     return result.map((item) => {
    //         return item;
    //     });
    // }

    getOneRandomMessage = async () => {
        const res = await this.getResource();
        const min = Math.floor(Math.random() * 50);
        const result = res.slice(min, min + 1);
        return result.map((item) => {
            return item;
        });
    }


}