// Set all of the Document Elements to global Variable
let docWin = document.getElementById("win");
let docLoss = document.getElementById("loss");
let docError = document.getElementById("errorMessage");
let docGuessText = document.getElementById("guessLeft");
let docLtrsCorrect = document.getElementById("lettersCorrect");
let docLtrsInCorrect = document.getElementById("lettersInCorrect");
let docHiddenText = document.getElementById("hiddenWordText");
let docRestartText = document.getElementById("restartText");
let docMoviePoster = document.getElementById("movieposter");
let docQuizMusic = document.getElementById("quiz");
let docCorMusic = document.getElementById("corSound");
let docInCorMusic = document.getElementById("incorSound");

//Set Global Variables
let hiddenWord = "";
let movieposter = "";
let word = "";
let wins = 0;
let loss = 0;
let guess = 10;
let ltrsCorrect = "";
let ltrsInCorrect = "";
let userLetter = "x"; // have not created the statment to gather this.
let flag = false;
let GWL = true;

//Word Selection Choices
movieData = {
    "movie1": {
        title: "avatar",
        imgsrc: "./movies/avatar.jpg"

    },
    "movie2": {
        title: "Avengers: Endgame",
        imgsrc: "./movies/Avengersendgame.jpg"

    },
    "movie3": {
        title: "Titanic",
        imgsrc: "./movies/Titanic.jpg"
    },
    "movie4": {
        title: "Star Wars: The Force Awakens",
        imgsrc: "./movies/swforce.jpg"
    },
    "movie4": {
        title: "Jurassic World",
        imgsrc: "./movies/jurassicWorld.jpg"
    },
    "movie5": {
        title: "Black Panther",
        imgsrc: "./movies/blackpanther.jpg"
    },
    "movie6": {
        title: "Harry Potter and the Deathly Hallows",
        imgsrc: "./movies/harrypotter.jpg"
    },
    "movie7": {
        title: "Frozen",
        imgsrc: "./movies/frozen.jpg"
    },
    "movie8": {
        title: "Beauty and the Beast",
        imgsrc: "./movies/beautyandbeast.jpg"
    },
    "movie9": {
        title: "Incredibles 2",
        imgsrc: "./movies/incredibles.jpg"
    },
    "movie10": {
        title: "The Fate of the Furious",
        imgsrc: "./movies/fastandfurious.jpg"
    },
    "movie11": {
        title: "Aquaman",
        imgsrc: "./movies/aquaman.jpg"
    },
    "movie12": {
        title: "Captain Marvel",
        imgsrc: "./movies/cptmarvel.jpg"
    },
    "movie13": {
        title: "Wonder Woman",
        imgsrc: "./movies/wonderwoman.jpg"
    },
    "movie14": {
        title: "The Lord of the Rings: The Return of the King",
        imgsrc: "./movies/lordoftherings.jpg"
    },
    "movie15": {
        title: "Skyfall",
        imgsrc: "./movies/jamesbond.jpg"
    },
    "movie16": {
        title: "The Dark Knight Rises",
        imgsrc: "./movies/batman.jpg"
    },
    "movie17": {
        title: "Toy Story 3",
        imgsrc: "./movies/toystory.jpg"
    },
    "movie18": {
        title: "Alice in Wonderland",
        imgsrc: "./movies/AliceinWonderland.jpg"
    },
    "movie19": {
        title: "Zootopia",
        imgsrc: "./movies/Zootopia.jpg"
    },
    "movie0": {
        title: "The Lion King",
        imgsrc: "./movies/loinking.jpg"
    }

}

//Game Object
let game = {
    
    playQuizMusic: function () {
        docQuizMusic.loop = true;
        docQuizMusic.volume = 0.5;
        docQuizMusic.play();
        console.log(docQuizMusic);
    },
    pauseQuizMusic: function () {
        docQuizMusic.pause();
    },
    restartQuizMusic: function () {
        docQuizMusic.pause();
        docQuizMusic.currentTime = 0;
    },
    corSoundPlay: function () {
        docCorMusic.play();
    },
    incorSoundPlay: function () {
        docInCorMusic.play();
    },
    initalize: function () {
        this.playQuizMusic();
        guess = 10;
        ltrsCorrect = "";
        ltrsInCorrect = "";
        this.getWord();
        this.getHWord(word);
        docGuessText.innerText = guess;
        docLtrsCorrect.innerText = ltrsCorrect;
        docLtrsInCorrect.innerText = ltrsInCorrect;
        docHiddenText.innerText = hiddenWord;
        docWin.innerText = "Wins: " + wins;
        docError.innerText = ""
        docRestartText.innerText = "";
        docMoviePoster.src = "";
        docMoviePoster.style.display = "none";
    },
    getWord: function () {
        let choice = Math.floor(Math.random() * Object.keys(movieData).length);
        let movie = "movie" + choice;
        movieposter = movieData[movie].imgsrc;
        console.log(movieposter);
        word = movieData[movie].title;
        word = word.toLowerCase();
    },
    getHWord: function (movieTitle) {
        hiddenWord = "";
        const extras = ["'", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "&", ":", ".", "-"]
        for (let x = 0; x < movieTitle.length; x++) {
            let ltrCheck = true;
            for (let j = 0; j < extras.length; j++) {
                if (movieTitle[x] === extras[j]) {
                    hiddenWord = hiddenWord + extras[j];
                    ltrCheck = false;
                }
            }
            if (ltrCheck) {
                hiddenWord = hiddenWord + "-";
            }
        }
        console.log(hiddenWord);
        console.log(movieTitle);
    },
    // checks to see if the game is over.
    checkGame: function () {
        if (hiddenWord === word) {
            this.restartQuizMusic();
            docError.innerText = "You have Won!";
            docRestartText.innerText = "Please Press 'Enter' to replay.";
            wins += 1;
            docWin.innerText = "Wins: " + wins;
            docMoviePoster.src = movieposter;
            docMoviePoster.style.display = "inline";
            flag = false;
            GWL = false;
        }
        if (guess == 0) {
            this.restartQuizMusic();
            docError.innerText = "You have Lost!";
            docRestartText.innerText = "Please Press 'Enter' to replay.";
            docMoviePoster.src = movieposter;
            docMoviePoster.style.display = "inline";
            loss += 1;
            docLoss.innerText = "Losses: " + loss;
            flag = false;
            GWL = false;
        }
    },
    //checks if the hiddenword has the choosen letter
    checkHiddenWord: function () {
        let check = false;
        let exist = false;
        for (let x = 0; x < word.length; x++) {
            if (word[x] == userLetter) {
                hiddenWord = hiddenWord.substring(0, x) + userLetter + hiddenWord.substring(x + 1);
                check = true;
            }
        }

        //adds to correct storage of letter and minuses guess for incorrect letter
        if (check) {
            for (let i = 0; i < ltrsCorrect.length; i++) {
                if (ltrsCorrect[i] == userLetter) {
                    exist = true
                }
            }
            if (!exist) {
                ltrsCorrect = ltrsCorrect + " " + userLetter;
                docLtrsCorrect.innerText = ltrsCorrect;
                this.pauseQuizMusic();
                this.corSoundPlay();
                this.playQuizMusic();

            }

            docHiddenText.innerText = hiddenWord;
        }
        else {
            for (let i = 0; i < ltrsInCorrect.length; i++) {
                if (ltrsInCorrect[i] == userLetter) {
                    exist = true
                }
                ;
            }
            if (!exist) {
                ltrsInCorrect = ltrsInCorrect + " " + userLetter;
                docLtrsInCorrect.innerText = ltrsInCorrect;
                if (guess > 0) {
                    guess -= 1;
                    this.pauseQuizMusic();
                    this.incorSoundPlay();
                    this.playQuizMusic();
                }


            }
            docHiddenText.innerText = hiddenWord;
            docGuessText.innerText = guess;
        }
    }
}

document.onkeyup = function (event) {
    if (GWL) {
        //check to make sure its an alpha number
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Alphabet upper case
            userLetter = event.key.toLowerCase();
            game.checkHiddenWord();
        } else if (event.keyCode >= 97 && event.keyCode <= 122) {
            // Alphabet lower case
            userLetter = event.key;
            game.checkHiddenWord();
        }
        game.checkGame();
    }
}

document.onkeydown = function (event) {
    if (event.keyCode == 13) {
        if (flag === false) {
            game.initalize();
            flag = true;
            GWL = true;
        }
    }
}