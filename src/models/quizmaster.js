const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Quizmaster = function () {
  this.text = null;
}











//
// Quizmaster.prototype.getData = function () {
//   // set the url
//   const request = new Request('https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple');
//
//   // function is 'onComplete'
//   request.get((quizData) => {
//     console.log(quizData);
//     // collect and assign string
//     this.text = quizData.quiz;
//     // publish it
//     PubSub.publish('Quizmaster:quiz-loaded', this.text);
//   });


}

module.exports = Quizmaster;
