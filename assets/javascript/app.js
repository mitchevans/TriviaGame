
// defining each question as an object
let Question1 = {"Q": 'In S4E1 "Fun Run", Michael hits this coworker with his car.',
                "answer": ["A: Dwight", "B: Phyllis", "C: Meredith", "D: Oscar"],
                "correctAnswerIndex": 2,
                "photo": "./assets/images/meredith.gif"};

let Question2 = {"Q": 'In S2E1 "The Dundies", Michael awards Pam Beesly with this dundie.',
                "answer": ["A: Worlds Longest Engagement", "B: Whitest Sneakers Award", "C: Hottest in the Office", "D: Fine Work Award"],
                "correctAnswerIndex": 1,
                "photo": "./assets/images/pam.gif"};

let Question3 = {"Q": 'This character started a fire making a cheese pita in S2E4 "The Fire".',
                "answer": ["A: Kelly", "B: Dwight", "C: Angela", "D: Ryan"],
                "correctAnswerIndex": 3,
                "photo": "./assets/images/ryan.gif"};

let Question4 = {"Q": 'In S2E4 "Halloween", what is the name of the person who was fired?',
                "answer": ["A: Creed", "B: Devon", "C: Kelly", "D: Andy"],
                "correctAnswerIndex": 1};

// defining variables
let questions = [Question1, Question2, Question3, Question4];
let correct = 0;
let incorrect = 0;
var number = 30;
var intervalId;
let questionsIndex = 0;

//initial gif image
$("#imageHolder").html(
    "<img src='./assets/images/home.gif'/>");

// timer functions
function run() {
    number = 15
    intervalId= setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>")

    if (number === 0) {
        stop();

    }
}

function stop (){

    clearInterval(intervalId);

    number = 15

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
        $("#correctIncorrectMessage").text("You answered " + correct + " correct and " + incorrect + " incorrect!");
        $("#show-number").text("");
        if (correct < 3){
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











