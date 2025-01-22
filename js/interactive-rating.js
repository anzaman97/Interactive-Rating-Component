// dom element variables 

// submit button element 
const submitBtn = document.getElementById('submit-btn');
//rating component element
const ratingComponent = document.getElementById('rating-component');
//thank you component element
const thankyouComponent = document.getElementById('thankyou-component');
//rating buttons
const ratingBtns = document.querySelectorAll('.rating-btn')





//dynamic number
let ratingScore = document.querySelector('.dynamic-number')

// defauilt score
let defaultScore = 0;

//event listeners

//submit btn listener 
submitBtn.addEventListener('click', submitScore)

//rating btn event listener
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', ratingBtnClicked)
});



//functions
function submitScore(e) {

  ratingComponent.style.display = "none";
  thankyouComponent.style.display = "block";
  ratingScore.textContent = defaultScore;
}

function submitScore(e) {
  e.preventDefault();
  ratingComponent.style.display = "none";
  thankyouComponent.style.display = "block";
  ratingScore.textContent = defaultScore;
}

function ratingBtnClicked(e) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');
  defaultScore = e.target.textContent;
}