// MOBILE NAVIGATION
// Open / close hamburger
$(document).ready(function(){
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
    });
});

// Show / hide navigation links
var mobileState = 'closed';

function toggleMobileMenu() {
	if( mobileState == 'closed' ) {
		document.getElementById("menu-links").style.display = "block";
		mobileState = 'open';
	} else {
		document.getElementById("menu-links").style.display = "none";
		mobileState = 'closed';
	}
}


// Open PDF
jQuery(document).ready(function($) {
  $('a[href$=".pdf"]')
    .attr('download','')
    .attr('target','_blank');

  if ($("#row2 > div").length ==1) {

  $( "#row2").addClass("center_rows")
  console.log('testclass');
    };

  if ($("#row3 > div").length ==1) {

  $( "#row3").addClass("center_rows")
  console.log('testclass');
    };
});



// ALL LIGHTBOX MODALS
// Show modal section for Blockout blinds
function openModalBlockout() {
  console.log("Opens blockout section only");
  document.getElementById('myModal-Blockout').style.display = "block";
}

// Close modal section
function closeModalBlockout() {
  console.log("Closes blockout section only");
  document.getElementById('myModal-Blockout').style.display = "none";
}

// Move from one image to another
var slideIndex = 1;
showSlidesBlockout(slideIndex);

function plusSlidesBlockout(n) {
  showSlidesBlockout(slideIndex += n);
}

// Open the image clicked on first
function currentSlideBlockout(n) {
  showSlidesBlockout(slideIndex = n);
}

// Show all slides and associated information with it
function showSlidesBlockout(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-Blockout");
  var dots = document.getElementsByClassName("demo-Blockout");
  var captionText = document.getElementById("caption-Blockout");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// LIGHTBOX
// Show modal section for Sunscreen blinds
function openModalSunscreen() {
  console.log("Opens sunscreen section only");
  document.getElementById('myModal-Sunscreen').style.display = "block";
}

// Close modal section
function closeModalSunscreen() {
  console.log("Closes sunscreen section only");
  document.getElementById('myModal-Sunscreen').style.display = "none";
}

// Move from one image to another
var slideIndex = 1;
showSlidesSunscreen(slideIndex);

function plusSlidesSunscreen(n) {
  showSlidesSunscreen(slideIndex += n);
}

// Open the image clicked on first
function currentSlideSunscreen(n) {
  showSlidesSunscreen(slideIndex = n);
}

// Show all slides and associated information with it
function showSlidesSunscreen(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-Sunscreen");
  var dots = document.getElementsByClassName("demo-Sunscreen");
  var captionText = document.getElementById("caption-Sunscreen");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// LIGHTBOX
// Show modal section for Venetian blinds
function openModalVenetian() {
  console.log("Opens Venetian section only");
  document.getElementById('myModal-Venetian').style.display = "block";
}

// Close modal section
function closeModalVenetian() {
  console.log("Closes Venetian section only");
  document.getElementById('myModal-Venetian').style.display = "none";
}

// Move from one image to another
var slideIndex = 1;
showSlidesVenetian(slideIndex);

function plusSlidesVenetian(n) {
  showSlidesVenetian(slideIndex += n);
}

// Open the image clicked on first
function currentSlideVenetian(n) {
  showSlidesVenetian(slideIndex = n);
}

// Show all slides and associated information with it
function showSlidesVenetian(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-Venetian");
  var dots = document.getElementsByClassName("demo-Venetian");
  var captionText = document.getElementById("caption-Venetian");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// ============= Javascript form valadition ============== //
function formValidation(theForm){

  // turn off basic html validation
  theForm.noValidate = true;

  // wait for form to be submitted 
  theForm.addEventListener("blur", function(evt) {
    if (validateForm(theForm) === false) {
        evt.preventDefault();
      }
    },  true);


  theForm.addEventListener('submit', function(evt) {
      if(validateForm(theForm) === false){
              evt.preventDefault();
          } 
    }, true);

      function validateForm(theForm){
        // assume initially there are no errors
          var isError = false;
          // get elements from the form
          var elements = theForm.elements;
          // traverse through the array to get fields and check if it is valid
           for (var i = 0; i < elements.length; i += 1) {
              var isValid = isFieldValid(elements[i]);
               if(isValid === false){
                      isError = true;
                  }      
           }
           return ! isError;
      }

function isFieldValid(field){

  var errorMessage = "";

  // skip fields that need not be validated
  if(! needsToBeValidated(field)){
    return true;
  }

  // test for developer screw-ups
    if(field.id.length === 0 || field.name.length === 0){
      console.error("errror", "field should have an ID and name attributes.");
      return false;
    }
    if(document.querySelector("#"+field.id+"-error") === null){
      console.error("errror: ","A span field is missing.");
      return false;
    }



    // reset error messages and error fields

    field.classList.remove('invalid');
    var errorSpan = document.querySelector("#"+ field.id +"-error");
    errorSpan.innerHTML = "";
    errorSpan.classList.remove('warning');

    // ============================================================== phone number check

    if(field.type === "tel" && ! validPhoneNumber(field.value)){
      errorMessage = "Enter a valid phone number."
    }

    // ============================================================== number checking

    if(field.type === "number" && field.min > 0 && field.value < parseInt(field.min)){
      errorMessage = "Must be atleast " + field.min + " or greater.";
    }

    if(field.type === "number" && field.max > 0 && field.value > parseInt(field.max)){
      errorMessage = "Must be " + field.max + " or less.";
    }

    // ============================================================== password match

    if(field.dataset.passwordMatch){
      console.log(field.dataset.passwordMatch);
      var matchingField = document.querySelector("#"+field.dataset.passwordMatch);

      if(matchingField.value !== field.value){
        errorMessage = "Passwords should match.";
      }
    }

    // ============================================================== min value check

    if(field.minLength > 0 && field.value.length < field.minLength){
      errorMessage = "Must be atleast " + field.minLength +" or more characters long.";
    }

    //  ============================================================= check email

    if(field.type === "email" && ! isEmail(field.value)){     
      errorMessage = "Provide a proper email.";
    }

    // ============================================================== check if the form element is blank

    if(field.required && field.value.trim() === ""){    
      errorMessage = "This field is required.";       
    }

    // check for error messages===================================

    if(errorMessage !== ""){
      // generate error field
      field.classList.add('invalid');

      // display error message in form
      var errorSpan = document.querySelector("#"+ field.id +"-error");
      errorSpan.innerHTML = errorMessage;
      errorSpan.classList.add('warning');

      return false;
    }
    return true;
  }


  function needsToBeValidated(field){
    var skipElements = ['button','submit','datalist', 'fieldset'];
    if(skipElements.indexOf(field.type) === -1 || field.type === "radio"){
      return true;
    } else {
      return false;
    }
  }
  function isEmail(input){
    return input.match(/^([a-z0-9_.\-+]+)@([\da-z.\-]+)\.([a-z\.]{2,})$/);
  }
  function validPhoneNumber(input){
    console.log(input);
    var pattern =/[^\dA-Z]/g;
    var phonenum = input.replace(pattern,'');
    console.log(phonenum);
    if(phonenum.length > 6 && phonenum.length < 15){
      return true;
    }
  } 
}


// https://spreadsheets.google.com/feeds/list/1v33d_RDwrHfi16yS1E4kCf_vsUhOvRCtTt60Pzc7mtY/od6/public/values?alt=json


// To use your Google spreadsheet, you need to first 'Publish to web' in order to get it's unique 'KEY'.

// Once you have your KEY, you can paste it into the following URL:
// https://spreadsheets.google.com/feeds/list/PUT-KEY-HERE/od6/public/values?alt=json

// If you open this URL (with your KEY) in your browser, you should see all the data in a 'minified' JSON format.
// Copy and paste the minified data into an online JSON formatter; it will help you format/read the content easier!

// To grab data from your spreadsheet, you need to 'get' the JSON data with jQuery
$.getJSON("https://spreadsheets.google.com/feeds/list/1v33d_RDwrHfi16yS1E4kCf_vsUhOvRCtTt60Pzc7mtY/od6/public/values?alt=json", function(data) {

  // TESTING
  // It's a good idea to test whether you can grab any data at all from your spreadsheet.
  // Open the Console and try to grab data from a particular cell in your spreadsheet.
  
  // To select a particular cell from your spreadsheet, you need to provide the co-ordinates to that cell.
  // The number inside the [] is the row in your spreadsheet.
  // The string that begins with 'gsx$...', is the name of your column in your spreadsheet.
    console.log(data.feed.entry[3]['gsx$price']['$t']);
    console.log(data.feed.entry[2]['gsx$numbersoldtodate']);
    // console.log(data.feed.entry[10]['gsx$numbersoldtodate']['$t']);
    // console.log(data.feed.entry[3].gsx$nameofproduct.$t);

    // AFTER TESTING
    // Using jQuery, you can insert data ('append') from your spreadsheet into the SPAN tag.
    // Note: You will need to provide the co-ordinates to a specific cell in the spreadsheet. 
  $( ".total-number-of-blinds" ).html(data.feed.entry[5]['gsx$numbersoldtodate']['$t']);
  $( ".total-blockoutBlinds" ).html(data.feed.entry[4]['gsx$numbersoldtodate']['$t']);
  $( ".total-sunscreenBlinds" ).html(data.feed.entry[5]['gsx$numbersoldtodate']['$t']);


})


// Create span fields showing total sold of each blind type instead!!!!!!!



function submitForm(){
  console.log('success');
  document.querySelector("#contact-form").style.display = "none";
  document.querySelector("#submit-message").style.display = "block";
}
