const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const QuizmasterView = function (container) {
  this.container = container;
}

QuizmasterView.prototype.bindEvents = function () {
  PubSub.subscribe('Quizmaster:quizmaster-loaded', (event) => {
    this.render(event.detail);
  });
}

QuizmasterView.prototype.render = function (quizmaster) {
  const p = document.createElement('p');
  p.textContent = quizmaster;
  this.container.appendChild(p);
}

module.exports = QuizmasterView;
