// Set all of the Document Elements to global Variable
let docWin = document.getElementById("win");
let docLoss = document.getElementById("loss");
let docError = document.getElementById("errorMessage");
let docGuessText = document.getElementById("guessLeft");
let docLtrsCorrect = document.getElementById("lettersCorrect");
let docLtrsInCorrect = document.getElementById("lettersInCorrect");
let docHiddenText = document.getElementById("hiddenWordText");

//Set Global Variables
let hiddenWord = "";
let word = "";
let wins = 0;
let loss = 0;
let guess = 10;
let ltrsCorrect = "";
let ltrsInCorrect="";
let userLetter = "x"; // have not created the statment to gather this.

//Word Selection Choices
movieData = {
    "movie1": {
        title: "avatar",
        imgsrc: "./assets/imgs/movies/avatar.jpeg"
    },
    "movie2": {
        title: "Avengers: Endgame",
        imgsrc: "./assets/imgs/movies/Avengersendgame.jpeg"
    },
    "movie3": {
        title: "Titanic",
        imgsrc: "./assets/imgs/movies/Titanic.jpeg"
    },
    "movie4": {
        title: "Star Wars: The Force Awakens",
        imgsrc: "./assets/imgs/movies/swforce.jpeg"
    },
    "movie4": {
        title: "Jurassic World",
        imgsrc: "./assets/imgs/movies/jurassicWorld.jpeg"
    },
    "movie5": {
        title: "Black Panther",
        imgsrc: "./assets/imgs/movies/blackpanther.jpeg"
    },
    "movie6": {
        title: "Harry Potter and the Deathly Hallows",
        imgsrc: "./assets/imgs/movies/harrypotter.jpeg"
    },
    "movie7": {
        title: "Frozen",
        imgsrc: "./assets/imgs/movies/frozen.jpeg"
    },
    "movie8": {
        title: "Beauty and the Beast",
        imgsrc: "./assets/imgs/movies/beautyandbeast.jpeg"
    },
    "movie9": {
        title: "Incredibles 2",
        imgsrc: "./assets/imgs/movies/incredibles.jpeg"
    },
    "movie10": {
        title: "The Fate of the Furious",
        imgsrc: "./assets/imgs/movies/fastandfurious.jpeg"
    },
    "movie11": {
        title: "Aquaman",
        imgsrc: "./assets/imgs/movies/aquaman.jpeg"
    },
    "movie12": {
        title: "Captain Marvel",
        imgsrc: "./assets/imgs/movies/cptmarvel.jpeg"
    },
    "movie13": {
        title: "Wonder Woman",
        imgsrc: "./assets/imgs/movies/wonderwoman.jpeg"
    },
    "movie14": {
        title: "The Lord of the Rings: The Return of the King",
        imgsrc: "./assets/imgs/movies/lordoftherings.jpeg"
    },
    "movie15": {
        title: "Skyfall",
        imgsrc: "./assets/imgs/movies/jamesbond.jpeg"
    },
    "movie16": {
        title: "The Dark Knight Rises",
        imgsrc: "./assets/imgs/movies/batman.jpeg"
    },
    "movie17": {
        title: "Toy Story 3",
        imgsrc: "./assets/imgs/movies/toystory.jpeg"
    },
    "movie18": {
        title: "Alice in Wonderland",
        imgsrc: "./assets/imgs/movies/AliceinWonderland.jpeg"
    },
    "movie19": {
        title: "Zootopia",
        imgsrc: "./assets/imgs/movies/Zootopia.jpeg"
    },
    "movie0": {
        title: "The Lion King",
        imgsrc: "./assets/imgs/movies/loinking.jpeg"
    }

}

//Game Object
let game={
    initalize: function(){
        let guess=10;
        let ltrsCorrect = "";
        let ltrsInCorrect = "";
        this.getWord();
        this.getHWord(word);
        docGuessText.innerText = guess;
        docLtrsCorrect.innerText = ltrsCorrect;
        docLtrsInCorrect.innerText = ltrsInCorrect;
        docHiddenText.innerText = hiddenWord;
        docError.innerText = ""
    },
    checkInput: function(){
        
    },
    getWord: function(){
        let choice = Math.floor(Math.random()*Object.keys(movieData).length);
        let movie = "movie"+choice;
        word = movieData[movie].title;
        word = word.toLowerCase();
    },
    getHWord: function(movieTitle){
        const extras = ["'", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&", ":", ".", "-"]
        for(let x =0;x<movieTitle.length;x++){
            let ltrCheck = true;
            for(let j = 0;j<extras.length;j++){
                if(movieTitle[x]===extras[j]){
                    hiddenWord = hiddenWord + extras[j];
                    ltrCheck = false;
                }
            }
            if(ltrCheck){
                
                hiddenWord = hiddenWord + "-";
            }
        }
        console.log(hiddenWord);
        console.log(movieTitle);
    },
    addToUsed:function(correctCheck){
        if(correctCheck){
            console.log(userLetter);
        }
        else{
            console.log("not found");
        }
    },
    // checks to see if the game is over.
    checkGame: function(){
        if(hiddenWord.search("-")<0 && guess>0){
            win+=1;
            docError.innerText = "You have WON! please press F1 to replay";
        }
        else if(hiddenWord.search("-")>0 && guess<=0){
            loss+=1;
            docError.innerText = "You have Lost! please press F1 to replay";
        }

    },
    //checks if the hiddenword has the choosen word
    checkHiddenWord: function(){
        let check=false;
        for(let x=0;x<word.length;x++){
            if(word[x]==userLetter){
                hiddenWord = hiddenWord.substring(0, x) + userLetter + hiddenWord.substring(x + 1);
                check=true;
            }
        }
        if(check){
            this.addToUsed(true);
        }
        else{
            this.addToUsed(false);
            guess-=1;
            console.log(guess);
        }
    }
}

document.onkeyup = function(event){
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
    console.log(userLetter)
    

}