Document Calls

win
loss
hiddenWordText
errorMessage
guessLeft
lettersCorrect
lettersInCorrect

if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Alphabet upper case
        userLetter=event.key.toLowerCase();
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        // Alphabet lower case
        userLetter=event.key;
    }
    else{
        console.log(event.key);
        console.log(event.keycode);
    }
    //console.log(userLetter)