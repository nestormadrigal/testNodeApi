const { getAllFrecuentQuestions } = require('../models/frecuentQuestionsModel');

function getFrecuentQuestions(req, res) {
    const frecuentQuestions = getAllFrecuentQuestions();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(frecuentQuestions));
}

module.exports = { getFrecuentQuestions };
