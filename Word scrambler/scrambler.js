var buttonRandom, buttonEmphasis;
var textarea;
var selections;


function setup() {

  var canvas = createCanvas(300, 200);

  createElement('br');
  buttonRandom = createButton('Randomize');
  buttonRandom.mousePressed(textInput);
}

function textInput() {
  background(255);
  fill(50);

  var inputText = "";

  inputText = window.getSelection().toString();

  text("ORIGINAL TEXT: ", 10, 30);
  text(inputText, 10, 50);

  var textArray = splitTokens(inputText, '.:;?! !@#$%^&*()+');
  var length = textArray.length;
  var jumbledArr = [];

  for (var i = 0; i < length; i++) {
    var whichIndex = int(random(textArray.length));
    jumbledArr.push(textArray[whichIndex]);
    textArray.splice(whichIndex, 1);
  }

  var newString = join(jumbledArr, ' ');
  text("NEW TEXT: " + newString, 10, 70);
}
