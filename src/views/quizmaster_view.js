const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const QuizMaster = require('../models/quizmaster.js');

const QuizMasterView = function (container) {
  this.container = container;
}
// subscribe
QuizMasterView.prototype.bindEvents = function () {
  PubSub.subscribe('QuizMaster:quizMaster-loaded', (event) => {
    this.render(event.detail);
  });
}
// append
QuizMasterView.prototype.render = function (quizMaster) {
  const p = document.createElement('p');
  p.textContent = quizMaster;
  this.container.appendChild(p);
}
// timer
var timeleft = 30;
var countdownTimer = setInterval(function(){
  document.getElementById("timer").value = 30 - --timeleft;
  if(timeleft <= 0)
    clearInterval(countdownTimer);
},1000);

// export
module.exports = QuizMasterView;
