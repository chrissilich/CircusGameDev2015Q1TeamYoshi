#pragma strict

// public var onClick: ButtonClickedEvent;

function Start () {
	Debug.Log('Btn');
}

function Update () {

	if (Input.GetMouseButtonDown(0)) {
		Debug.Log('Pressed');
		Application.LoadLevel("Level 1"); //loads any level
	};
}