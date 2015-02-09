#pragma strict
 // textfield to hold the score and score variable
private var textfield: GUIText;
private var score:int;

function Start(){
	textfield = GameObject.Find("GUI/txt-score").GetComponent(GUIText);
	score = 0;
	UpdateScoreText();
}

function UpdateScoreText(){
    // update textfield with score
    textfield.text = score.ToString();
}

