
// defining each question as an object
let Question1 = {"Q": 'In S4E1 "Fun Run", Michael hits this employee with his car.',
                "answer": ["A: Dwight", "B: Phyllis", "C: Meredith", "D: Oscar"],
                "correctAnswerIndex": 2,
                "photo": "./assets/images/meredith.gif"};

let Question2 = {"Q": 'In S2E1 "The Dundies", Michael awards Pam Beesly with what dundie?',
                "answer": ["A: Worlds Longest Engagement", "B: Whitest Sneakers Award", "C: Hottest in the Office", "D: Fine Work Award"],
                "correctAnswerIndex": 1,
                "photo": "./assets/images/pam.gif"};

let Question3 = {"Q": 'This character started a fire making a cheese pita in S2E4 "The Fire".',
                "answer": ["A: Kelly", "B: Dwight", "C: Angela", "D: Ryan"],
                "correctAnswerIndex": 3,
                "photo": "./assets/images/ryan.gif"};

let Question4 = {"Q": 'In S2E4 "Halloween", what is the name of the person who was fired?',
                "answer": ["A: Creed", "B: Devon", "C: Kelly", "D: Andy"],
                "correctAnswerIndex": 1,
                "photo": "./assets/images/devon.gif" };

let Question5 = {"Q": 'In S3E19 "The Negotiation", Michael accidentally wears a womans suit. What is the brand of the suit he wears?',
                "answer": ["A: Brooks Brothers", "B: Womens Aurora", "C: Venus", "D: Missterious"],
                "correctAnswerIndex": 3,
                "photo": "./assets/images/michael.gif"};

let Question6 = {"Q": 'What line of business is Bob Vance in?',
                "answer": ["A: Real Estate", "B: Refrigeration", "C: Auto", "D: Paper"],
                "correctAnswerIndex": 1,
                "photo": "./assets/images/vance.gif"};

let Question7 = {"Q": 'Who has two thumbs and hates Todd Packer?',
                "answer": ["A: Jim", "B: Michael", "C: Kelly", "D: Oscar"],
                "correctAnswerIndex": 0,
                "photo": "./assets/images/jim.gif"};

let Question8 = {"Q": 'In S4E10 "Branch Wars", whos warehouse uniform is Jim wearing while Dwight and Michael are silly stringing the warehouse in Utica?',
                "answer": ["A: Darryl", "B: Glenn", "C: Roy", "D: Madge"],
                "correctAnswerIndex": 3,
                "photo": "./assets/images/madge.gif"};

let Question9 = {"Q": 'In S3E20 "Safety Training", whos car does Dwight accidentally hit with a watermelon?',
                "answer": ["A: Stanley", "B: Angela", "C: Dwight", "D: Pam"],
                "correctAnswerIndex": 0,
                "photo": "./assets/images/stanley.gif"};

let Question10 = {"Q": 'In S1E1 "Pilot", Michael pranks Pam by accusing her of stealing what?',
                "answer": ["A: Post-it Notes", "B: A Stapler", "C: Paperclips", "D: Money"],
                "correctAnswerIndex": 0,};



// defining variables
let questions = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10];
let correct = 0;
let incorrect = 0;
let timedOut = 0;
var number = 21;
var intervalId;
let questionsIndex = 0;

//initial gif image
$("#imageHolder").html(
    "<img src='./assets/images/home.gif'/>");

// timer functions
function run() {
    number = 21
    intervalId= setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#show-number").text( number)

    if (number === 0) {
        $("#correctIncorrectMessage").text("You ran out of time, the correct answer was " + questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]] + "." );
        timedOut++;
        stop();
    }
}

function stop (){

    clearInterval(intervalId);

    number = 21

    $("#imageHolder").html(
        "<img src='" + questions[questionsIndex]["photo"]  + "'/>");

    //setTimeout($("#correctIncorrectMessage").text(""), 3000);

    if (questionsIndex < questions.length -1) {
        questionsIndex++;
        run();
    $("#question").text(questions[questionsIndex]["Q"]);
    $("#a1").text(questions[questionsIndex]["answer"][0])
    $("#a2").text(questions[questionsIndex]["answer"][1])
    $("#a3").text(questions[questionsIndex]["answer"][2])
    $("#a4").text(questions[questionsIndex]["answer"][3])
    }

    else {$("#question").text("");
        $("#a1").text("");
        $("#a2").text("");
        $("#a3").text("");
        $("#a4").text("");
        if (timedOut > 0){
       
        $("#correctIncorrectMessage").text("You answered " + correct + " correct " + incorrect + " incorrect and did't answer " + timedOut + "!");
        }
        else {
        $("#correctIncorrectMessage").text("You answered " + correct + " correct and " + incorrect + " incorrect.");
        }
        $("#show-number").text("");
        if (correct < 7){
            $("#imageHolder").html(
            "<img src='./assets/images/no.gif'/>");
        }
        else{
            $("#imageHolder").html(
            "<img src='./assets/images/win.gif'/>");}
    }

}

//pressing the start button to display the first question/answers and run the clock
$("#startButton").on("click", function() {
    $("#question").text(questions[questionsIndex]["Q"]);
    $("#a1").text(questions[questionsIndex]["answer"][0])
    $("#a2").text(questions[questionsIndex]["answer"][1])
    $("#a3").text(questions[questionsIndex]["answer"][2])
    $("#a4").text(questions[questionsIndex]["answer"][3])
    run();
    $("#startButton").text("");
})

$("#a1").on("click", function(event){

    if ($("#a1").text() == questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]]){
        $("#correctIncorrectMessage").text("Correct!");

        correct++;
        
        stop();
   }
    else {

        $("#correctIncorrectMessage").text("Incorrect, the answer was " + questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]] + "." );
        incorrect++;
        stop();
        
   }
})

$("#a2").on("click", function(event){

    if ($("#a2").text() == questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]]){
        $("#correctIncorrectMessage").text("Correct!");
        correct++
        stop();
    }

    else {
        $("#correctIncorrectMessage").text("Incorrect, the answer was " + questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]] + "." );
        incorrect++
        stop();
    }
 })

 $("#a3").on("click", function(event){

    if ($("#a3").text() == questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]]){
        $("#correctIncorrectMessage").text("Correct!");
        correct++;
        stop();
    }
    else {

        $("#correctIncorrectMessage").text("Incorrect, the answer was " + questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]] + "." );
        incorrect++;
        stop();
    }
 })

 $("#a4").on("click", function(event){

    if ($("#a4").text() == questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]]){
        $("#correctIncorrectMessage").text("Correct!");
        correct++;
        stop();
    }

    else {

        $("#correctIncorrectMessage").text("Incorrect, the answer was " + questions[questionsIndex]["answer"][questions[questionsIndex]["correctAnswerIndex"]] + "." );
        incorrect++;
        stop();
    }
 })











