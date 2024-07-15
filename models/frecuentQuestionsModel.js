const frecuentQuestions = [
    { id: 1, question: 'Difference between ITIN and SSN', answer: 'This should be the answer for the difference' },
    { id: 2, question: 'What documents I need to file my taxes if I do not have a business', answer: 'w2 and many more' }
];

function getAllFrecuentQuestions() {
    return frecuentQuestions;
}

module.exports = { getAllFrecuentQuestions };
