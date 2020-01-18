var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
var LexBotService = require("../../services/lex-bot-service");
window.$ = $;

class ChatBot extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false,
            userinput: "",
            messageList: []
        }

        this.toggleShow = this.toggleShow.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.keypress = this.keypress.bind(this);
    }

    toggleShow(){
        this.setState(state => {
            return  {
                visible: !state.visible
            }
        });
    }

    changeInput(e){
        this.setState({
            userinput: e.target.value
        });
    }

    addMessageToBox(message, type){
        const messageList = [...this.state.messageList, {
            message,
            type
        }];

        this.setState({
            messageList
        });
    }

    sendMessage(message){
        this.addMessageToBox(message, 'outgoing');
        LexBotService.postText(message).then(response => {
            this.addMessageToBox(response, 'incoming');
        });
    }

    keypress(e){
        console.log("keypress", e.nativeEvent, e.nativeEvent.keyCode)
        if(e.nativeEvent.keyCode == 13 && this.state.userinput.length){
            this.sendMessage(this.state.userinput);
            this.setState({
                userinput: ""
            });
        }
    }

    render() {

        return (
            <div className="chat-bot">
                <div className="chat-window">
                    <div className="header">
                        <p>Vijay's digital assistant</p>
                    </div>
                    <div className="message-box">
                        {this.state.messageList.map((m, i) => {
                            return <div key={i} className={"message-item " + m.type}>
                                        <span className="who">{m.type == "outgoing" ? "You": "Bot"}</span>
                                        <span className="message">{m.message}</span>
                                    </div>
                        })}
                    </div>
                    <div className="message-input">
                        <input type="text" value={this.state.userinput} onChange={this.changeInput} onKeyPress={this.keypress} />
                    </div>
                </div>
                <div className="indicator" onClick={this.toggleShow}>
                    {this.state.visible ? 
                    <i className="glyphicon glyphicon-remove"></i> : 
                    <i className="glyphicon glyphicon-user"></i>}
                </div>
            </div>
        );
    }
}

module.exports = ChatBot;