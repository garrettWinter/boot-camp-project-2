var dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', function(){
    dropdown.setAttribute('class', 'is-active');
});

dropdown.addEventListener('focusout', () => dropdown.setAttribute('class', 'dropdown is-hoverable'));
