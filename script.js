

(function() {
    var names = ["Yadav", "Johar", "Jawahar", "Jaan", "Paudel", "Foro", "Lathak", "Paamna", "Launa", "Jauna"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
