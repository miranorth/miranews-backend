const getJSON = require('get-json')

class NumVerifyController {

    static getInfo(req, res) {
        let url = `http://apilayer.net/api/validate?access_key=${process.env.NUMVERIVY_ACCESS_KEY}&number=${req.query.number}`;
        getJSON(url, function (error, response) {
            if (error) {
                res.status(500).json({
                    message: error.message
                });
            }
            res.status(200).json({
                message: 'Get info success',
                data: response
            });
        });
    }
}

module.exports = NumVerifyController;