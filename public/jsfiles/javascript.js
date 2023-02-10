// var userCharacter = $('#marvel-input');
// var savedContainer = $('#saved-container');
// var searchBlock = $('#search-block');
// var currentDisplay = $('#current-character');
// var saveCharacterBtn = $('#save-character');
// var moreInfoBtn = $('#more-info');
// var submitButton = $('#search-modal');
// var searchedCharactersName = $("#searched-character");
// var characterName = $("#characterName");
// var characterDescription = $("#description");
// var wikiURLS = $('#wikiUrl-container');
// var backButton = $('#back');

// submitButton.on('click', loadInfo);

// function loadInfo(){
//     // backButton.attr("class", "is-hidden");
//     var userInput = userCharacter.val();
//     getMarvelCharacter(userInput);
//   }
  
//   // Get and fetch marvel character from API and whatever attributes
//   function getMarvelCharacter(userInput) {
//     fetch("https://imdb-api.com/en/API/SearchMovie/k_4x8q801j/" + userInput)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (characterInfo) {
//         console.log(characterInfo.results)
//       //Checks to see if Marvel has this character if not prompts user
//         if (characterInfo.data.total === 0) {
//           enterVaildCharacter();
//         } else {
//           // Sets content in character display modal
//           $("#hide").removeClass("is-hidden");
//         //   backButton.attr("class", "is-hidden");
//           characterName.text(characterInfo.data.results[0].title);
//           characterDescription.text(characterInfo.data.results[0].description);
//           $("#icon").attr("src", characterInfo.data.results[0].thumbnail.path + "/portrait_xlarge.jpg");
  
//         }
//         console.log(characterInfo);
//       })
//   }