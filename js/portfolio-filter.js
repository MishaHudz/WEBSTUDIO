const refs = {
  filterButtons: document.querySelector('.filter'),
  arrOfCartMarcers: document.querySelectorAll('.project-text'),
};

const { filterButtons, arrOfCartMarcers } = refs;

filterButtons.addEventListener('click', onFilterButttonClick);

function onFilterButttonClick(evt) {
  if (evt.target.type !== 'button') return;

  filterPortfolioCards(arrOfCartMarcers, evt.target.innerHTML.toLowerCase());
}

function filterPortfolioCards(arrOfFilterParagraps, filter) {
  arrOfFilterParagraps.forEach(cartMarcer => {
    cartMarcer.closest('li').classList.remove('hide-portfolio-elem');

    if (cartMarcer.innerHTML.toLowerCase() !== filter && filter !== 'all')
      cartMarcer.closest('li').classList.add('hide-portfolio-elem');
  });
}
