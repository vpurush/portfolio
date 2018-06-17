var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
window.$ = $;

class TicTacToe extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state={
            game: [
                [0, 0, 0],
                [1, 0, 0],
                [0, 0, 0]
            ]
        }

        this.cellClick = this.cellClick.bind(this);
    }

    cellClick(i, j){
        return (event) => {
            console.log("i , j", i ,j);
            var game = Object.assign([], this.state.game);
            game[i][j] = -1;

            
            this.setState({
                game: game
            });
        }
    }

    renderChar(c){
        if(c == 1){
            return "x";
        }else if(c == -1){
            return "o";
        }else{
            return "";
        }
    }

    render() {

        return (
            <section className="ttt">
                <div className="left-pane">
                    <div className="description">
                        description goes here
                    </div>
                </div>
                <div className="right-pane">
                    <div className="game">
                        {this.state.game.map((row, i) => {
                            return (<div className="row">
                                {row.map((c, j) => {
                                    return (<div className="cell" onClick={this.cellClick(i, j)}>
                                            {this.renderChar(c)}
                                            </div>);
                                    })
                                }
                            </div>);
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = TicTacToe;