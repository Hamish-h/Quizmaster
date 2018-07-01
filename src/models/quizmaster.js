const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const QuizMaster = function () {
  // null or "" empty string
  this.text = null;
}
// get data
QuizMaster.prototype.getData = function () {
  // set the url
  const request = new Request('https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple');
  // oncomplete
  request.get((data) => {
  // console.log("request get results ", data);
  // collect and assign data
  this.category = data.results;
  this.question = data.results;
  this.incorrect_answers = data.results;
  this.correct_answer = data.results;
  // console.log("this.category", this.category);
  // publish category
  PubSub.publish('QuizMaster:quizMaster-loaded', this.category[0].category);
  // publish
  PubSub.publish('QuizMaster:quizMaster-loaded', this.question[0].question);
  // publish incorrect answers
  PubSub.publish('QuizMaster:quizMaster-loaded', this.incorrect_answers[0].incorrect_answers);
  // publish correct answer
  PubSub.publish('QuizMaster:quizMaster-loaded', this.correct_answer[0].correct_answer);
  });
}
// export
module.exports = QuizMaster;
