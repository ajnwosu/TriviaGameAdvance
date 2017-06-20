

var countStart = 30;

$('#start').on("click", function(e){

 $('#start').remove();

  loadQuestion();


})


  $(document).on('click' , '.answer-button' , function(e){

  clicked(e);
  })


  $(document).on('click' , '#reset' , function(e){

 reset();

})

var questions = [{
    question: "Which county has pryamids? ",
    answers: [ "France" , "South Africa", "Mexico" , "China"],
    correctAnswer: "Mexico"
// image : "AJ.jpeg"
},
 
 {
    question: "What is the capital city of China?",
    answers: [ "ShangHai" , "Beijing", "Hongkong" , "Tokyo"],
    correctAnswer: "Beijing" 
// image : "AJ.jpeg"

},

{
    question: "Who starred in Iron Man?",
    answers: [ "Robert downey jr" , "Will Smith", "Leonardo Decaprio" , "Shia LaBeouf"],
    correctAnswer: "Robert downey jr" 

},
    {
    question: "What is the famous James Bond?",
    answers: [ "Ashton Martin" , "BMW", "Mercedez Benz" , "Lambogini"],
    correctAnswer: "Ashton Martin" 

 },

    {
    question: "Who gave this project?",
    answers: [ "Akandu" , "James", "Michael" , "John"],
    correctAnswer: "Akandu" 

}];




 var questions= questions;
 var currentQuestion= 0;
  var counter = countStart;
  var correct = 0;
  var incorrect =0;
   function countdown (){
   	counter--;
    $('#counter-number').html(counter);

    if (counter === 0){
      console.log('TIME UP');
      timeUp();
    }
  };
  function loadQuestion (){
    timer = setInterval(countdown, 1000);
     $('#subwrapper').html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
       $('#subwrapper').append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  };
   function nextQuestion(){
    counter = countStart;
    $('#counter-number').html(counter);
    currentQuestion++;
    loadQuestion();
  };
  function  timeUp(){
    clearInterval(timer);
    $('#counter-number').html(counter);

     $('#subwrapper').html('<h2>Out of Time!</h2>');
    $('#subwrapper').append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
    $('#subwrapper').append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (currentQuestion === questions.length - 1){
      setTimeout(results, 3 * 1000);
    } else {
      setTimeout(nextQuestion, 3 * 1000);
    }
  }
    function results () {
    clearInterval(timer);

     $('#subwrapper').html('<h2>You gave it your best shot!</h2>');
    $('#counter-number').html(counter);
     $('#subwrapper').append('<h3>Correct Answers: ' + correct + '</h3>');
     $('#subwrapper').append('<h3>Incorrect Answers: ' + incorrect + '</h3>');
     $('#subwrapper').append('<h3>Unanswered: ' + (questions.length - (incorrect + correct)) + '</h3>');
    $('#subwrapper').append('<br><button id="reset">Ready to try again?</button>');
  };
  function clicked (e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.answered();
    } else {
      this.answeredIncorrectly();
    }
  };
  function answeredIncorrectly() {
  	incorrect++;
    clearInterval(timer);
     $('#subwrapper').html('<h2>Nope!, you suck as this game lol!</h2>');
     $('#subwrapper').append('<h3>The Correct Answer was: ' + questions[currentQuestion].correctAnswer + '</h3>');
    // $('#subwrapper').append('<img src="' + questions[currentQuestion].image + '" />');

    if (currentQuestion === questions.length - 1){
      setTimeout(results, 3000);
    } else {
      setTimeout(nextQuestion, 3000);
    }
  };
  function answered(){
    clearInterval(timer);
    correct++;
     $('#subwrapper').html('<h2>You got one for the books!</h2>');
     // $('#subwrapper').append('<img src="' + questions[currentQuestion].image + '" />');

    if (currentQuestion === questions.length - 1){
      setTimeout(results, 3000);
    } else {
      setTimeout(nextQuestion, 3000);
    }
  };
  function reset(){
    this.currentQuestion = 0;
    this.counter = countStart;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }

















