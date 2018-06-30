const Quizmaster = require('./models/quizmaster.js');
const QuizmasterView = require('./views/quizmaster_view.js');
const QuizmasterInfo = require('./views/quizmaster_info.js');

document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript Loaded');
  const quizmaster = new Quizmaster();
  quizMaster.getData();

  const quizmasterContainer = document.querySelector('#???????????');
  const quizmasterView = new QuizmasterListView(quizMasterContainer);
  quizmasterView.bindEvents();

})
