function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
  }

function logShout(string) {
    logShout = "hello"
    console.log(string.toUpperCase());
    console.log(string === string.toUpperCase());
}

function logWhisper(string) {
    logWhisper = "HELLO"
    console.log(string.toLowerCase());
    console.log(string === string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase())
      return "I can\'t hear you!"
      if (string === string.toUpperCase())
      return "YES INDEED!"
      if(string === "Let\'s have dinner together!")
      return "I would love to!"
}
