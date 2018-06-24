
class MLService{
    constructor(){
        this.baseUrl = 'http://localhost:3000'
    }

    _getUrl(path){
        let baseURL = this.baseUrl;
        return `${baseURL}${path}`;
    }

    getNextMoveInTTT(board){
        var data = {
            board: JSON.stringify(board)
        }

        return fetch(this._getUrl(`/next-move?board=${data.board}`), {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).catch((err) => {
            console.log("error occurred", err)
        });
    }
}

module.exports = new MLService();