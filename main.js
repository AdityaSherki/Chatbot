const chatArea = document.querySelector(".chat-area");

function firstBotMessage() {
    let firstMessage = "Hello! My name is Ako a chatbot, How can I help you?";
    document.getElementById("firstMessage").innerHTML = firstMessage;
}

firstBotMessage();


//TEJAS's PART
function getBotResponse(input) {
    //rock paper scissors
    input = input.toLowerCase();
    if (input == "dogy teja") {
        return "Chutiya Hai!!!";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello MF!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

function retrieveUserResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p id="bot">' + botResponse + '</p>';
    $("#chat-area").append(botHtml);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#user-input").val();
    console.log(userText);
    if (userText == "") {
        console.log("Empty input");
        return;
    }
    let userHtml = '<p id="user">' + userText + '</p>';


    $("#user-input").val("");
    $("#chat-area").append(userHtml);
    document.getElementById("user").scrollIntoView(true);
    setTimeout(() => {
        retrieveUserResponse(userText);
    }, 1000)

}
function sendButton() {
    getResponse();
}
// Press enter to send a message
$("#user-input").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});





// const setScrollPosition = () => {
//     if (chatArea.scrollHeight > 0) {
//         chatArea.scrollTop = chatArea.scrollHeight;
//     }
// };

