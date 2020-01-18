const AWS = require('aws-sdk/lib/core');
require('aws-sdk/lib/credentials/cognito_identity_credentials');
require('aws-sdk/clients/lexruntime');
console.log("AWS", AWS);
class LexBotService{
    constructor(){
        // Initialize the Amazon Cognito credentials provider 
        AWS.config = {};
        AWS.config.region = 'ap-southeast-2'; 
        // Region 
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({ 
            IdentityPoolId: 'ap-southeast-2:bd48d663-9f8d-4456-aba7-7e7662fabbc4', 
        });

        this.userId = "user" + Date.now() + Math.random();
        this.lexRuntime = new AWS.LexRuntime();
    }
    
    postText(message){
        return new Promise((resolve, reject) => {
            var params = {
                botAlias: '$LATEST',
                botName: 'myprofile',
                inputText: message,
                userId: this.userId,
                sessionAttributes: {}
            };
            
            this.lexRuntime.postText(params, function(err, data) {
                if (err) {
                    console.error(err, err.stack);
                }
                // console.log("data", data);
                if (data) {
                    resolve(data.message);
                }
            });
        });
    }
}

module.exports = new LexBotService();