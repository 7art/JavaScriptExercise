
// Write Javascript code!

const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>JS Starter</h1>';

function findMissingLetter(arr)
{
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let j = alpha.indexOf(arr[0].toLowerCase());
  for (let i = 0; i < arr.length; i++) {
    let arrLetter = String(arr[i]).toUpperCase();
    let aplhaLetter = String(alpha[j]).toUpperCase();
    if (arrLetter !== aplhaLetter) 
      return arr[i] != arrLetter ? alpha[j] : alpha[j].toUpperCase();    
    j++;
  }
  
  return " ";
}

appDiv.innerHTML += "['a','b','c','d','f'] - " + findMissingLetter(['a','b','c','d','f']);
appDiv.innerHTML += '<br>';
appDiv.innerHTML += "['o','q','r','s'] - " + findMissingLetter(['o','q','r','s']);
appDiv.innerHTML += '<br>';
appDiv.innerHTML += "['O','Q','R','S'] - " + findMissingLetter(['O','Q','R','S']);