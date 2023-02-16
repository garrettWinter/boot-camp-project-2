console.log('searchBar.js loaded');

const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');



const searchRedirect = async (event) => {
  console.log(searchBar.value);
  if (searchBar.value == '' ){
    window.alert("Please enter a part of a movie name in the search bar, and search again.")
  }
  event.preventDefault();
  const term = searchBar.value.trim();
  console.log(term);
  // location.replace('/search/' + term);
};

//no idea why but submit has issues eventually. click is most reliable
searchBtn.addEventListener('click', searchRedirect);