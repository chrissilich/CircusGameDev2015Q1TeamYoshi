#pragma strict

var pauseCanvas:Canvas;

function Start () {
	Screen.lockCursor = true;
	Screen.showCursor = false;
}

function Update () {

	if (Input.GetKeyDown(KeyCode.Escape)) {
		pauseCanvas.enabled = true;
		Time.timeScale = 0;
		Screen.lockCursor = false;
		Screen.showCursor = true;
	} if (Input.GetMouseButtonDown(0)) {
		pauseCanvas.enabled = false;
	};

}

function ResumeGame () {
	
}