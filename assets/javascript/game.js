$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var ties = 0;
    var username = "";
    var userGuess = 'rock';
    // var user2Guess = 'paper';

    var config = {
        apiKey: "AIzaSyDrRos3pvaMEm_n-vRHZ4mpIm37cQIjk3U",
        authDomain: "project1-c0437.firebaseapp.com",
        databaseURL: "https://project1-c0437.firebaseio.com",
        projectId: "project1-c0437",
        storageBucket: "project1-c0437.appspot.com",
        messagingSenderId: "657654491071"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    $("#start").on("click", function(event) {
        event.preventDefault();
        var user = $("#username").val().trim();
        $("#user1").text(user);
        $("#name-input").empty();
        $("#name-input").text("Welcome " + user + " you are Player 1");
        database.ref().set({
            name: user,
            wins: wins,
            losses: losses,
            ties: ties,
            guess: userGuess
        });
    })

    $("#send").on("click", function(event) {
        event.preventDefault();
        var message = $("#chat").val().trim();
        $("#chat-box").append(message);
    })


    //  Game Logic Here
    //   if ((user1Guess === "r") || (user1Guess === "p") || (user1Guess === "s")) {
    
    //     if ((user1Guess === "r") && (user2Guess === "s")) {
    //       wins++;
    //     } else if ((user1Guess === "r") && (user2Guess === "p")) {
    //       losses++;
    //     } else if ((user1Guess === "s") && (user2Guess === "r")) {
    //       losses++;
    //     } else if ((user1Guess === "s") && (user2Guess === "p")) {
    //       wins++;
    //     } else if ((user1Guess === "p") && (user2Guess === "r")) {
    //       wins++;
    //     } else if ((user1Guess === "p") && (user2Guess === "s")) {
    //       losses++;
    //     } else if (user1Guess === user2Guess) {
    //       ties++;
    //     }
    //   }
})