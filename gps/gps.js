const sexRobot = window.speechSynthesis;
const skynetButForShifting = document.querySelector('form');

let directions = [
    "You have arrived.",
    "You have arrived at your destination.",
    "In one kilometer, you will reach your destination.",
    "Turn around.",
    "In two hundred meters, turn around.",
    "Turn left.",
    "Turn right on to main street.",
    "In 50 meters, turn left.",
    "Take the third exit.",
    "Enter the roundabout.",
    "Enter the roundabout and take the first exit.",
    "Keep left",
    "Take the next exit, then keep left."
];

let insults = [
    "You giant vagina",
    "Dick head",
    "Pillock",
    "You prick",
    "You worthless sack of shit",
    "And then suck on deeze nuts",
    "You fucking numpty.",
    "You total bell end.",
    "Then learn how to drive.",
    "You useless cunt.",
    "Moron.",
    "You Sheep Shagger.",
    "And then pull over, and wonder, why no one will ever love you."
];

let voices = [];

const lazyRandomiser = function(list) {
    return list[Math.floor((Math.random()*list.length))];
}

const allTheSexyRobotVoices = function() {
    voices = sexRobot.getVoices().filter(function(a) {
        return a.lang.indexOf('en-GB') != -1;
    });
}

allTheSexyRobotVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = allTheSexyRobotVoices;
}

const speak = function(){
    if (!sexRobot.speaking) {
        let sweetNothings = new SpeechSynthesisUtterance(lazyRandomiser(directions) + " " + lazyRandomiser(insults));
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