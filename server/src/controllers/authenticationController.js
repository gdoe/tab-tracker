const {User} = require('../models');

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'Email already in use.'
            });
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                return res.status(403).send({
                    error: 'Incorrect login information'
                });
            }

            const isPasswordValid = user.password === (password);
            if (!isPasswordValid){
                return res.status(403).send({
                    error: 'Incorrect login information',
                });
            }
            const userJson = user.toJSON();
            res.send({
                message: "Login successful!",
                user: userJson
            });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to log in',
                errormsg: err
            });
        }
    }
};