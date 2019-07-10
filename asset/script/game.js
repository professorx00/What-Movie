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
let guess = 4;
let ltrsCorrect = "";
let ltrsInCorrect="";
let userLetter = "x"; // have not created the statment to gather this.
let flag=false;
let GWL =true;

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
        guess=4;
        ltrsCorrect = "";
        ltrsInCorrect = "";
        this.getWord();
        this.getHWord(word);
        docGuessText.innerText = guess;
        docLtrsCorrect.innerText = ltrsCorrect;
        docLtrsInCorrect.innerText = ltrsInCorrect;
        docHiddenText.innerText = hiddenWord;
        docWin.innerText = "Wins: " +wins;
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
        hiddenWord = "";
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
    // checks to see if the game is over.
    checkGame: function () {
        if(hiddenWord===word){
            docError.innerText = "You have Won!";
            wins+=1;
            docWin.innerText= "Wins: "+wins;
            flag=false;
            GWL=false;
        }
        if(guess==0){
            docError.innerText = "You have Lost!";
            loss+=1;
            docLoss.innerText= "Losses: "+loss;
            flag=false;
            GWL=false;
        }
    },
    //checks if the hiddenword has the choosen letter
    checkHiddenWord: function(){
        let check=false;
        let exist = false;
        for(let x=0;x<word.length;x++){
            if(word[x]==userLetter){
                hiddenWord = hiddenWord.substring(0, x) + userLetter + hiddenWord.substring(x + 1);
                check=true;
            }
        }

        //adds to correct storage of letter and minuses guess for incorrect letter
        if(check){
            for(let i=0;i<ltrsCorrect.length;i++){
                if(ltrsCorrect[i]==userLetter){
                    exist=true
                }
            }
            if(!exist){
                ltrsCorrect = ltrsCorrect + " " + userLetter;
                docLtrsCorrect.innerText = ltrsCorrect;
            }
            
            docHiddenText.innerText = hiddenWord;
        }
        else{
            for(let i=0;i<ltrsInCorrect.length;i++){
                if(ltrsInCorrect[i]==userLetter){
                    exist=true
                }
            ;
            }
            if(!exist){
                ltrsInCorrect = ltrsInCorrect + " " + userLetter;
                docLtrsInCorrect.innerText = ltrsInCorrect;
                if(guess>0){
                  guess-=1;  
                }

                
            }
            docHiddenText.innerText = hiddenWord;
            docGuessText.innerText = guess;
        }
    }
}

document.onkeyup = function(event){
    if(GWL){
            //check to make sure its an alpha number
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Alphabet upper case
            userLetter=event.key.toLowerCase();
            game.checkHiddenWord();
        } else if (event.keyCode >= 97 && event.keyCode <= 122) {
            // Alphabet lower case
            userLetter=event.key;
            game.checkHiddenWord();
        }
        game.checkGame();
    }
}

document.onkeydown = function(event){
    if(event.keyCode == 13){
        if(flag===false){
            game.initalize();
            flag=true;
            GWL=true; 
        }
    }
}