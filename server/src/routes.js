const authenticationController = require('./controllers/authenticationController');

const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy.js');

module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: "System is running fine"
        });
    });
    
    app.post('/register', 
        authenticationControllerPolicy.register,
        authenticationController.register);

    app.post('/login', 
        authenticationController.login);      
};

