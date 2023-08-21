const title = document.querySelector(".title");
const titleContent = title.textContent;
const input = document.querySelector(".text__input");
const submitButton = document.querySelector(".submit__button");
let resultBox = document.querySelector(".results");

// trophy icon
let winIcon = `<i class="uil uil-grin"></i>`;
let loseIcon = `<i class="uil uil-sad-cry"></i>`;

// Making the animation happen as soon as the page was loaded
window.onload = function () {
  // We should split up the word / the result is always an array
  const splitedText = titleContent.split("");
  title.textContent = "";
  // Creating a for loop for every charachter to changed into a span
  for (let i = 0; i < splitedText.length; i++) {
    title.innerHTML += `<span>${splitedText[i]}</span>`;
  }

  let char = 0;
  let timer = setInterval(onClick, 100);

  function onClick() {
    const span = title.querySelectorAll("span")[char];
    span.classList.add("fade");
    // increasing it to be happended for every one of them
    char++;

    //we need to stop it
    if (char === splitedText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
};

// checking the users word
submitButton.addEventListener("click", palindromeChecker);

// palindrome checker
function palindromeChecker(word) {
  word = input.value.toLowerCase();
  // console.log(word);
  let wordSplited = word.split("");
  //   console.log(wordSplited);
  let reversedWord = wordSplited.reverse();

  //joining the reversed word
  let joinedWord = reversedWord.join("");
  //   console.log(reversedWord.join(""));

  // Setting the conditions / 1.Not empty 2. Exactly the same with it's reversed
  if (word == joinedWord && word != "") {
    // console.log('It is a palindrppme');
    // Adding the result to the box
    resultBox.innerHTML = `${winIcon} Palindrome ${winIcon}`;
    input.value = "";
  } else if (word == "") {
    resultBox.innerHTML = "Enter a Word!";
  } else {
    // console.log('It is not a palindrome');
    // Adding the result to the box
    resultBox.innerHTML = `${loseIcon} Not A Palindrome ${loseIcon}`;
    input.value = "";
  }
}