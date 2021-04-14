const sexRobot = window.speechSynthesis;
const skynetButForShifting = document.querySelector('form');
const phrases = [
    "I'm sorry, I have a boyfriend",
    "I'm sorry, I have a girlfriend",
    "You are not my type",
    "You remind me too much of my ex",
    "No",
    "Hell no",
    "Sorry, I don't speak English",
    "I'm actually gay",
    "I'm actually straight",
    "Ha ha ha ha ha ha",
    "I think you are a wonderful person, but space lizards are more my type",
    "Sorry but I'm not interested in a romantic or sexual relationship with you",
    "I'm taking a break from shifting random people in nightclubs, sorry.",
    "No thank you.",
    "I'm flattered, but I'm not interested",
    "Never in a million years",
    "Do you know who you are talking to?",
    "Sorry, I only like humans",
    "Excuse me, I have to go shit.",
    "Yock, like"
];

let voices = [];

const lazyRandomiser = function(list) {
    return list[Math.floor((Math.random()*list.length))];
}

const allTheSexyRobotVoices = function() {
    voices = sexRobot.getVoices().filter(function(a) {
        return a.lang.indexOf('en-') != -1;
    });
}

allTheSexyRobotVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = allTheSexyRobotVoices;
}

const speak = function(){
    if (!sexRobot.speaking) {
        let sweetNothings = new SpeechSynthesisUtterance(lazyRandomiser(phrases));
        sweetNothings.voice = lazyRandomiser(voices);
        
        sweetNothings.pitch = 1;
        sweetNothings.rate = 1;
        sexRobot.speak(sweetNothings);
    }
}

skynetButForShifting.onsubmit = function(event) {
  event.preventDefault();

  speak();
}