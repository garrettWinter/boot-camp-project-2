console.log('searchBar.js loaded');

const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');



const searchRedirect = async (event) => {
  event.preventDefault();
  const term = searchBar.value.trim();
  console.log(term);
  location.replace('/search/' + term);


};

//no idea why but submit has issues eventually. click is most reliable
searchBtn.addEventListener('click', searchRedirect);
console.log(searchRedirect)