console.log('searchBar.js loaded');

const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');



const searchRedirect = async () => {
  event.preventDefault();
  const term = searchBar.value.trim();
  console.log(term);
  location.replace('search/' + term);


};

searchBtn.addEventListener('click', searchRedirect);