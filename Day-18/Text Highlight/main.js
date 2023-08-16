 const BOX= document.getElementById("box");
 const searchBarBox =document.getElementById("searchBar");

//  console.log(BOX);
//  console.log(searchBarBox);

// triggers whenever the user types or changes the content of the input field.

searchBarBox.addEventListener('input', (e) => {
 
// extracts the current value of the input field .
    const searchText = e.target.value;

// g stand for Global search, i stand for Case-insensitive search.

    const regex = new RegExp(searchText, 'gi'); 
    // RegExp is Regular expression

//  retrieves the content 
    let text = BOX.innerHTML
    
    text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '')

    const newtext = text.replace(regex,  '<mark class="highlight">$&</mark>');

    BOX.innerHTML = newtext;

});