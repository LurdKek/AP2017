var input;
var button;

function setup() {
    noCanvas();
    lexicon = new RiLexicon();
    input = createInput('How has you day been little teddybear?');
    button = createButton("submit");    
    input.changed(processRita);
    button.mousePressed(processRita);
    input.size(300);
}

function processRita() {
    
    var s = input.value();
    var rs = new RiString(s);
    var words = rs.words();
    var pos = rs.pos();
    console.log(words);
    console.log(pos);
    
    var output = "";
    for (var i = 0; i < words.length; i++) {
        if (/nn.*/.test(pos[i])) {
            output += lexicon.randomWord(pos[i]);  //give me another noun via Rita Library
        } else{
         output += words[i];   
        }
        
        output += " ";
    }    
    createP(output);
}
