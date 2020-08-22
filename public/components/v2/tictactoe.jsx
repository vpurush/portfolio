var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const TTTMLService = require("../../services/ttt-ml-service.js");
import { TTTQTableBuilder } from './tictactoe-qtable-builder.jsx';
window.$ = $;

console.log("TTTQTableBuilder", TTTQTableBuilder)

export default class TicTacToe extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            game: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            disabled: false,
            highLight: {},
            gameOver: false
        }

        this.cellClick = this.cellClick.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    cellClick(i, j) {
        return (event) => {
            if (!this.state.disabled && this.state.game[i][j] == 0) {
                // console.log("i , j", i ,j);
                var game = Object.assign([], this.state.game);
                game[i][j] = -1;


                this.setState({
                    game: game,
                    disabled: true
                }, () => {
                    if (!this.checkWinner(-1)) {
                        this.makeNextMove();
                    }
                });
            }
        }
    }

    checkGameOver() {
        let gameOver = true;
        this.state.game.forEach(r => {
            r.forEach(c => {
                if (c == 0) {
                    gameOver = false;
                }
            })
        })

        this.setState({
            gameOver: gameOver
        });
    }

    checkWinner(player) {

        this.checkGameOver();
        var result = this.isWin(player);
        if (result.win) {
            this.highLight(result.coords);

            this.setState({
                disabled: true,
                gameOver: true
            });

            if (player === -1) {
                TTTMLService.lost(this.state.game);
            } else {
                TTTMLService.won(this.state.game);
            }
            return true;
        } else {
            return false;
        }
    }

    highLight(coords) {
        var highLight = {};
        coords.forEach((c) => {
            highLight[c[0]] = highLight[c[0]] || {};
            highLight[c[0]][c[1]] = true;
        })

        this.setState({
            highLight: highLight
        });
    }

    isWin(player) {
        var g = this.state.game;

        //rows
        if (g[0][0] == g[0][1] && g[0][1] == g[0][2] && g[0][2] == player) {
            console.log("isWin row 1", g[0][0], g[0][1], g[0][2], player)
            return { win: true, coords: [[0, 0], [0, 1], [0, 2]] };
        }
        if (g[1][0] == g[1][1] && g[1][1] == g[1][2] && g[1][2] == player) {
            console.log("isWin row 2", true)
            return { win: true, coords: [[1, 0], [1, 1], [1, 2]] };
        }
        if (g[2][0] == g[2][1] && g[2][1] == g[2][2] && g[2][2] == player) {
            console.log("isWin row 3", true)
            return { win: true, coords: [[2, 0], [2, 1], [2, 2]] };
        }

        //columns
        if (g[0][0] == g[1][0] && g[1][0] == g[2][0] && g[2][0] == player) {
            console.log("isWin c 1", true)
            return { win: true, coords: [[0, 0], [1, 0], [2, 0]] };
        }
        if (g[0][1] == g[1][1] && g[1][1] == g[2][1] && g[2][1] == player) {
            console.log("isWin c 2", true)
            return { win: true, coords: [[0, 1], [1, 1], [2, 1]] };
        }
        if (g[0][2] == g[1][2] && g[1][2] == g[2][2] && g[2][2] == player) {
            console.log("isWin c 3", true)
            return { win: true, coords: [[0, 2], [1, 2], [2, 2]] };
        }

        //diagonal
        if (g[0][0] == g[1][1] && g[1][1] == g[2][2] && g[2][2] == player) {
            console.log("isWin d 1", true)
            return { win: true, coords: [[0, 0], [1, 1], [2, 2]] };
        }
        if (g[2][0] == g[1][1] && g[1][1] == g[0][2] && g[0][2] == player) {
            console.log("isWin d 1", true)
            return { win: true, coords: [[2, 0], [1, 1], [0, 2]] };
        }

        return { win: false };
    }

    makeNextMove() {
        const game = TTTMLService.getNextMoveInTTT(this.state.game);

        // let game = Object.assign([], this.state.game);
        // game[i][j] = 1;

        if (game) {
            this.setState({
                game: game,
                disabled: false
            }, () => {
                this.checkWinner(1);
            });
        }
        //this.makeRandomMove();
    }

    restartGame() {
        this.setState({
            game: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            disabled: false,
            highLight: {},
            gameOver: false
        });
    }

    makeRandomMove() {
        let count = 0;
        this.state.game.forEach(r => {
            r.forEach(c => {
                if (c == 0) {
                    count = count + 1;
                }
            });
        });

        let ran = Math.ceil(Math.random() * count) - 1;

        let game = Object.assign([], this.state.game);

        for (let i = 0; i < this.state.game.length; i++) {
            for (let j = 0; j < this.state.game[i].length; j++) {
                if (this.state.game[i][j] == 0) {
                    console.log("count i j", ran, i, j);
                    if (ran == 0) {
                        console.log("i j", i, j);
                        game[i][j] = 1;

                        i = this.state.game.length;
                        break;
                    }
                    ran = ran - 1;
                }
            }
        }

        this.setState({
            game: game,
            disabled: false
        })

    }

    renderChar(c) {
        if (c == 1) {
            return "x";
        } else if (c == -1) {
            return "o";
        } else {
            return "";
        }
    }

    render() {

        return (
            <div>
                <section className="ttt">
                    <div className="left-pane">
                        <div className="game">
                            {this.state.game.map((row, i) => {
                                return (<div className="row" key={i}>
                                    {row.map((c, j) => {
                                        return (<div key={j} className={this.state.highLight[i] && this.state.highLight[i][j] ? "cell cell__highlight" : "cell"} onClick={this.cellClick(i, j)}>
                                            {this.renderChar(c)}
                                        </div>);
                                    })
                                    }
                                </div>);
                            })}
                        </div>
                        <div className="game-control">
                            <button className={this.state.gameOver ? "restart-game btn btn-primary" : "restart-game btn btn-primary vhidden"} onClick={this.restartGame}>Restart Game</button>
                        </div>
                    </div>
                    <div className="right-pane">
                        <div className="description">
                            <h3 className="game-name">tic tac toe</h3>
                            <h2 className="learning-method">&nbsp; using reinforcement learning</h2>
                            <p>
                                This learning agent has been trained using <em>reinforcement learning</em> technique,
                            which is to say that the learning process is based on rewards offered at the end of the game based on its outcome.
                        </p>
                        </div>
                    </div>
                </section>
                <section className="qtable-builder">
                    <TTTQTableBuilder />
                </section>
            </div>
        );
    }
}
