const { getFrecuentQuestions } = require('../controllers/frecuentQuestionsController');

function frecuentQuestionsRoute(req, res) {
    if (req.method === 'GET') {
        getFrecuentQuestions(req, res);
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
}

module.exports = frecuentQuestionsRoute;
