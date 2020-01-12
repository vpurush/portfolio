
class State{
    constructor(key, nextStateKeyList){
        this.decay = 0.75;
        this.isFinalState = false;
        this.finalStateScore = 0;
        this.nextStateKeyList = nextStateKeyList || [];
        this.key = key
    }

    getScore(stateIndex){
        if(this.isFinalState){
            return this.finalStateScore;
        } else {
            let score = this.nextStateKeyList.reduce((intermediateScore, nextStateKey) => {
                const nextState = stateIndex[nextStateKey];
                if(nextState){
                    return intermediateScore + this.decay * nextState.getScore(stateIndex);
                } else {
                    return intermediateScore + 0;
                }
            }, 0);

            // console.log("calculate score", this.key, score);
            return score;
        }
    }

    setNegativeReward(){
        this.isFinalState = true;
        this.finalStateScore += -100;
    }

    setPositiveReward(){
        this.isFinalState = true;
        this.finalStateScore += 100;
    }

    setReward(reward){
        console.log("setReward", reward);
        this.isFinalState = true;
        this.finalStateScore = reward;
    }
}

class ReinforcementLearner{
    constructor(){
        this.stateIndex = {};
        this.restoreState();

        setInterval(() => {
            this.saveState();
        }, 20000)
    }

    doesStateExist(key){
        return !!this.stateIndex[key];
    }

    addState(key, nextStateList){
        // console.log("addState", key, nextStateList);
        this.stateIndex[key] = new State(key, nextStateList);
    }

    setNegativeReward(key){
        let state = this.stateIndex[key];
        if(!state){
            this.addState(key, []);
            state = this.stateIndex[key];
            // state.setReward(-100);
        } else {
            console.log("State is already in the index");
        }
        state.setNegativeReward();
    }

    setPositiveReward(key){
        let state = this.stateIndex[key];
        if(!state){
            this.addState(key, []);
            state = this.stateIndex[key];
            // state.setReward(100);
        } else {
            console.log("State is already in the index");
        }
        state.setPositiveReward();
    }

    findNextBestState(key){
        const state = this.stateIndex[key];
        if(state){
            const candidateStateList = [];
            state.nextStateKeyList.forEach(nextStateKey => {
                const nextState = this.stateIndex[nextStateKey];
                if (nextState) {
                    candidateStateList.push({
                        key: nextStateKey,
                        score: nextState.getScore(this.stateIndex)
                    });
                } else {
                    candidateStateList.push({
                        key: nextStateKey,
                        score: 0
                    });
                }
            });

            const sortedCandidateStateList = candidateStateList.sort((a,b) => a.score < b.score ? 1 : -1);
            let bestState = sortedCandidateStateList[0];

            console.log("sortedCandidateStateList", sortedCandidateStateList)

            const otherStatesWithSameScore = sortedCandidateStateList.filter(s => s.score == bestState.score);

            if(otherStatesWithSameScore.length > 1){
                const bestStateIdx = Math.floor(Math.random() * otherStatesWithSameScore.length);
                bestState = otherStatesWithSameScore[bestStateIdx];
                console.log("bestStateIdx", bestStateIdx, bestState)
                bestState = otherStatesWithSameScore[0];

            }

            return bestState;
        } else {
            throw new Error("This state has not been added yet. Use addState method.")
        }
    }

    saveState(){
        console.log("StateIndex", this.stateIndex);
        localStorage.setItem("ttt-training-data", JSON.stringify(this.stateIndex));
    }

    restoreState(){
        const trainingData = localStorage.getItem("ttt-training-data");
        const stateIndex = JSON.parse(trainingData);

        for(let prop in stateIndex){
            if(stateIndex.hasOwnProperty(prop)){
                const state = stateIndex[prop];
                stateIndex[prop] = Object.assign(new State(state.key, state.nextStateKeyList), stateIndex[prop]);
            }
        }
        this.stateIndex = stateIndex;
        console.log("Restored", stateIndex);
    }

}

class TTTMLService{
    constructor(){
        this.baseUrl = 'http://localhost:3000'
        this.mode = "test";
        this.decisionMap = {};

        this.TTTLearner = new ReinforcementLearner();
    }

    _getUrl(path){
        let baseURL = this.baseUrl;
        return `${baseURL}${path}`;
    }

    setTrainingMode(){
        this.mode = "train";
    }

    setTestMode(){
        this.mode = "test";
    }

    startTraining(){
        this.mode = "train";
        this.trainingMoves = [];
    }

    endTraining(isWin){
        this.mode = "test";
        if(isWin){

        }
    }

    // getNextMoveInTTT(board){
    //     var data = {
    //         board: JSON.stringify(board)
    //     }

    //     return fetch(this._getUrl(`/next-move?board=${data.board}`), {
    //         method: 'GET'
    //     }).then((res) => {
    //         return res.json();
    //     }).catch((err) => {
    //         console.log("error occurred", err)
    //     });
    // }
    boardToString(board){
        let str = "";

        board.forEach((row, ri) => {
            row.forEach((cell, ci) => {
                str += cell;
            });
        });
        return str;
    }

    stringToBoard(key){
        const game = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        let char = "";
        let itr = 0;
        key.split('').forEach(k => {
            char += k;
            if(char == '-'){
                return false;
            } else {
                const no = parseInt(char);
                const i = Math.floor(itr / 3);
                const j = Math.floor(itr % 3);

                // console.log("i,j", i, j)

                game[i][j] = no;
                itr += 1;
                char = "";
            }
        });

        // console.log("game", key, game);
        return game;
    }

    getAllPossibleNextMoves(board, nextPlayer){
        const nextMoveList = [];

        board.forEach((row, ri) => {
            row.forEach((cell, ci) => {
                // console.log("cell", cell, ri, ci)
                if(cell == 0){
                    const clonedBoard = JSON.parse(JSON.stringify(board));
                    clonedBoard[ri][ci] = nextPlayer;

                    // const nextMove = {
                    //     r: ri,
                    //     c: ci,
                    //     key: this.boardToString(clonedBoard)
                    // };
                    nextMoveList.push(this.boardToString(clonedBoard));
                }
            });
        });
        // console.log("nextMoveList", nextMoveList);
        return nextMoveList;
    }

    // populateDecisionMap(board) {
    //     const key = this.boardToString(board);
    //     if(!this.decisionMap[key]){
    //         const nextMoveList = this.getAllPossibleNextMoves(board);
    //         this.decisionMap[key] = nextMoveList;
    //     }
    // }

    // chooseBestMove(board){
    //     const key = this.boardToString(board);
    //     if(!this.decisionMap[key]){
    //         throw new Error("Key not found! Logic error.");
    //     } else {
    //         const nextMoveList = this.decisionMap[key];
    //         let bestNextMove = nextMoveList[0];
    //         nextMoveList.forEach((nm) => {
    //             if(nm.score > bestNextMove.score){
    //                 bestNextMove = nm;
    //             }
    //         });

    //         return bestNextMove;
    //     }
    // }



    getNextMoveInTTT(board){
        const key = this.boardToString(board);
        if(!this.TTTLearner.doesStateExist(key)){
            const nextMoveList = this.getAllPossibleNextMoves(board, 1);
            this.TTTLearner.addState(key, nextMoveList);
        }

        const bestState = this.TTTLearner.findNextBestState(key);
        if (bestState){
            const bestMoveBoard = this.stringToBoard(bestState.key);
            if(!this.TTTLearner.doesStateExist(bestState.key)){
                const nextMoveList = this.getAllPossibleNextMoves(bestMoveBoard, -1);
                this.TTTLearner.addState(bestState.key, nextMoveList);
            }
            return bestMoveBoard;
        } else {
            return null
        }
        // console.log("boardToString", this.boardToString(board));
        // this.populateDecisionMap(board);
        // const bestMove = this.chooseBestMove(board);

        if(this.mode == "train"){
            this.trainingMoves.push(bestState);
        }
        return [bestState.r, bestState.c];
    }

    won(board){
        const key = this.boardToString(board);
        this.TTTLearner.setPositiveReward(key);
    }

    lost(board){
        const key = this.boardToString(board);
        this.TTTLearner.setNegativeReward(key);
    }
}

module.exports = new TTTMLService();