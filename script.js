$(document).ready(function(){

    var magic8Ball = {};

	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it", "yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy", "Try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

	magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

		$("#answer").text(answer);
		$("#answer").hide(answer);
		$("#answer").fadeIn(4000);
    	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

		console.log(question);
        console.log(answer);
    };

	var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
		$("#8ball").effect( "shake" );
    };

    $("#questionButton").click( onClick );
	$("#answer").hide();

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

//wait half a second before showing prompt
   setTimeout(function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);


});
