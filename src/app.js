const Quizmaster = require('./models/quizmaster.js');
const QuizmasterView = require('./views/quizmaster_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded')

  const quizMaster = new QuizMaster();
  quizMaster.getData();

  const quizMasterContainer = document.querySelector('div#quizMaster-container');
  const quizMasterView = new QuizMasterView(quizMasterContainer);
  quizMasterView.bindEvents();

})
