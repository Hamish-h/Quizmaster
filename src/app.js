const Quizmaster = require('./models/quizmaster.js');
const QuizmasterView = require('./views/quizmaster_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded')

  const quizmaster = new Quizmaster();
  quizMaster.getData();

  const quizMasterContainer = document.querySelector('div#quizmaster-container');
  const quizMasterView = new QuizmasterView(quizMasterContainer);
  quizMasterView.bindEvents();

})
