const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4b85b323e76242d582d6b9b4822d700f');

class NewsController {

    static getNews(req, res) {

        let country = req.query.country;
        newsapi.v2.topHeadlines({
                country: country
            })
            .then(response => {
                res.status(200).json({
                    message: 'Get news success',
                    response: response
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            });
    }

    static searchNews(req, res) {
        let country = req.query.country;
        let q = req.query.q;

        newsapi.v2.topHeadlines({
                q: q,
                country: country
            })
            .then(response => {
                res.status(200).json({
                    message: 'Search news success',
                    response: response
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            });
    }
}

module.exports = NewsController;