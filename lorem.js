//===========================================//
// Setting 'Lorem-Ipsum' and 'Error' values //
//=========================================//
var letters = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
    "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
    "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus " +
    "est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" +
    " nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
    "no sea takimata sanctus est Lorem ipsum dolor sit amet";
var words = [" Lorem ", "ipsum ", "dolor ", "sit ", "amet, ", "consetetur", " sadipscing ", "elitr, ", "sed ", "diam",
    " nonumy", " eirmod ", "tempor", " invidunt", " ut ", "labore", " et ", "dolore", " magna", " aliquyam",
    " erat, ", "sed ", "diam", " voluptua.", " At", " vero ", "eos", " et ", "accusam ", "et", " justo ", "duo",
    " dolores", " et ", "ea", " rebum. ", "Stet", " clita ", "kasd", " gubergren, ", "no", " sea", " takimata",
    " sanctus ", "est", " Lorem", " ipsum ", "dolor ", "sit", " amet. ", "Lorem", " ipsum ", "dolor",
    " sit", " amet, ", "consetetur", " sadipscing ", "elitr,", " sed ", "diam", " nonumy", " eirmod", " tempor",
    " invidunt", " ut ", "labore", " et", " dolore", " magna", " aliquyam ", "erat, ", "sed ", "diam",
    " voluptua. ", "At ", "ver", "o eos", " et", " accusam ", "et ", "justo", " duo", " dolores", " et", " ea",
    " rebum. ", "Stet", " clita", " kasd", " gubergren, ", "no", " sea", " takimata ", "sanctus ", "est ",
    "Lorem ", "ipsum", " dolor ", "sit ", "amet"];
var paragraph =[" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
    "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
    "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus " +
    "est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" +
    " nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
    "no sea takimata sanctus est Lorem ipsum dolor sit amet\n\n"];
var errormessage = new Array();
    errormessage["0"] = '<div class="ui negative message"> <div class="header">[ Please choose more than one "word" or "letter! ]<br>Do not forget to tell me what you are looking for (use the "amount of" - dropdown)</div><a href="/lorem" class="ui red button">back</a></div>';
    errormessage["1"] = '<div class="ui negative message"> <div class="header">[ Please choose more than one "word" or "letter! ]<br><em>I do not think yo want to see ["0"] words or letters</em></em></div><a href="/lorem" class="ui red button">back</a></div>';
    errormessage["2"] = '<div class="ui negative message"> <div class="header">Do not forget to tell me what you are looking for (use the "amount of" - dropdown)</div><a href="/lorem" class="ui red button">back</a></div>';
//==========================================//
//           EXPORTS                       //
//========================================//
module.exports.letters = letters;
module.exports.words = words;
module.exports.paragraph = paragraph;
module.exports.errormessage = errormessage;
