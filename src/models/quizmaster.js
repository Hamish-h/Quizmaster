const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const QuizMaster = function () {
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
  // publish it
  PubSub.publish('QuizMaster:quizMaster-loaded', this.category[0].category);

  PubSub.publish('QuizMaster:quizMaster-loaded', this.question[0].question);

  PubSub.publish('QuizMaster:quizMaster-loaded', this.incorrect_answers[0].incorrect_answers);

  PubSub.publish('QuizMaster:quizMaster-loaded', this.correct_answer[0].correct_answer);

});
}
// export
module.exports = QuizMaster;
