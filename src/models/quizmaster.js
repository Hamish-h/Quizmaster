const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Quizmaster = function () {
  this.text = null;
}
// get data
Quizmaster.prototype.getData = function () {
  // set the url
  const request = new Request('https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple');
  // oncomplete
  request.get((quizMasterData) => {
      console.log(quizMasterData);
  // collect and assign data
  this.text - quizMasterData.question;
  // publish it
  PubSub.publish('Quizmaster:quizMaster-loaded', this.text);

};
// exports
module.exports = Quizmaster;









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
