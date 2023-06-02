const filterButtons = document.querySelector('.filter');
const arrOfCartMarcers = document.querySelectorAll('.project-text');

filterButtons.addEventListener('click', onFilterButttonClick);

function onFilterButttonClick(evt) {
  if (evt.target.type !== 'button') return;

  const filter = evt.target.innerHTML.toLowerCase();

  arrOfCartMarcers.forEach(cartMarcer => {
    cartMarcer.closest('li').classList.remove('hide-portfolio-elem');

    if (cartMarcer.innerHTML.toLowerCase() !== filter && filter !== 'all')
      cartMarcer.closest('li').classList.add('hide-portfolio-elem');
  });
}
