
// //Game function working

//all variables
let number = Math.floor(Math.random() * 20) + 1;
let again = document.querySelector(".again");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore")
let user = document.querySelector(".guess");
let qmark = document.querySelector(".number");
let hint = document.querySelector(".hint");

//startups
score.innerHTML = localStorage.getItem("score");
highscore.innerHTML = localStorage.getItem("highscore");

//hint button click handler
let que;
hint.addEventListener("click", () => {
    console.log(number);
    // hints
 fetch(`http://numbersapi.com/${number}/trivia?notfound=floor&fragment`)
 .then(response=>response.text())
 .then(text=> que=text)
 .then(que=>alert(que));

})

//again button handler event listener
again.addEventListener("click", () => {
    window.location.reload();
    window.localStorage.setItem("score", "0");
})

//click button handler
check.addEventListener("click", () => {
    if (!user.value) {
        message.innerHTML = "😞 Oops,No Number!<br>Enter your new number";
        document.querySelector("body").style.backgroundColor = '#191970';

        let seconds=1;

        function secondshow(){
            if(seconds ==4){
                document.querySelector(".seconds").innerHTML+="GO.. ";
                clearInterval();
            }else{
                document.querySelector(".seconds").innerHTML+=seconds+" ";
            }
            seconds++;
        }

        setInterval(secondshow,1000);

        //audio
        let empty=new Audio('./hello.mp3');
        empty.play();
        setTimeout(() => {
            window.location.reload()
        }, 5000);


    } else if (user.value == number) {
        message.innerHTML = "😄 You got it Right";
        document.querySelector("body").style.backgroundColor = "#17B169";
        localStorage.setItem("score", Number(score.innerHTML) + 1);
        let max = Math.max(localStorage.getItem("score"), localStorage.getItem("highscore"));
        localStorage.setItem("highscore", max);
        highscore.innerHTML = localStorage.getItem("highscore");
        score.innerHTML = localStorage.getItem("score");
        qmark.innerHTML = number;
        let seconds = 1;
        function secondshow() {
            if(seconds ==4){
                document.querySelector(".seconds").innerHTML += "GO..";    
                clearInterval();
            }else {
            document.querySelector(".seconds").innerHTML += seconds+ "  ";
            }
            seconds++;
        }
        setInterval(secondshow, 1000);
        setTimeout(() => {
            window.location.reload()
        }, 5000);


        // audio

        let correct=new Audio('./victory.mp3')
        correct.play();
        setTimeout(() => {
            window.location.reload()
        }, 5000);


    } else {
        message.innerHTML = "😥 Oops! you guessed it wrong....";
        document.querySelector("body").style.backgroundColor = "red";
        qmark.innerHTML = number;


        let seconds = 1;
        function secondshow() {
            if(seconds ==4){
                document.querySelector(".seconds").innerHTML += "GO..";    
                clearInterval();
            }else {
            document.querySelector(".seconds").innerHTML += seconds+ "  ";
            }
            seconds++;
        }
        setInterval(secondshow, 1000);
        setTimeout(() => {
            window.location.reload()
        }, 5000);

        // audio

        let wrong=new Audio('./sad.wav');
        wrong.play();
        setTimeout(() => {
            window.location.reload()
        }, 5000);

    }
})