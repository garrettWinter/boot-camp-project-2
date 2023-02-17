//Allows Users to search for a specific movie with the searchbar. Currently only works with singular words.
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');
const searchForm = document.querySelector('#searchForm');

const searchRedirect = async (event) => {
  event.preventDefault();
  if (searchBar.value == '' ){
    window.alert("Please enter a part of a movie name in the search bar, and search again.");
    return
  }

  const term = searchBar.value.trim();
  location.replace('/search/' + term);
};

searchBtn.addEventListener('click', searchRedirect);