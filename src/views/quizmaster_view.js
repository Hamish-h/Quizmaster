const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const QuizMasterView = function (container) {
  this.container = container;
}

QuizMasterView.prototype.bindEvents = function () {
  PubSub.subscribe('QuizMaster:quizMaster-loaded', (event) => {
    this.render(event.detail);
  });
}

QuizMasterView.prototype.render = function (quizMaster) {
  const p = document.createElement('p');
  p.textContent = quizMaster;
  this.container.appendChild(p);
}

module.exports = QuizMasterView;
