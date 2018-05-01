$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var ties = 0;
    var username = '';
    var userGuess = '';
    var turnCounter = 0;
    var clickCounter = 0;
    var userChatInput = '';


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
    var gameState = {
        user1: {
            name: username,
            wins: wins,
            losses: losses,
            ties: ties,
            guess: userGuess
        },
        user2: { 
            name: username,
            wins: wins,
            losses: losses,
            ties: ties,
            guess: userGuess
        },
        turn: turnCounter,
        chat: userChatInput
    }
    localStorage.clear();

    database.ref().on("value", function(snapshot) {
        snap = snapshot.val();
        $("#user1").text(snap.user1.name);
        $("#user2").text(snap.user2.name);
    })

    $("#start").on("click", function(event) {
        event.preventDefault();
        var user = $("#username").val().trim();
        clickCounter++;
        if ( clickCounter == 2) {
            localStorage.setItem('user2', user);
            gameState.user2.name = localStorage.getItem('user2');
            database.ref().set(gameState);
        } else if ( clickCounter == 1) {
            localStorage.setItem('user1', user);
            gameState.user1.name = localStorage.getItem('user1');
            database.ref().set(gameState);
        }      
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