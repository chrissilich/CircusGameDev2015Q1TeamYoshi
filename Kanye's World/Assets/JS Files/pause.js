#pragma strict

function Start () {
	Screen.lockCursor = true;
	Screen.showCursor = false;
}

function Update () {


 // 0 = open
 // 1 = closed
	if (Input.GetKeyDown(KeyCode.Escape)) {
		//Time.timeScale = 0;
		Screen.lockCursor = false;
		Screen.showCursor = true;
		Debug.Log(gameObject);
		var animController: Animator = gameObject.GetComponent("Animator");	
		Debug.Log(animController);
		animController.SetInteger("State", 1);
	} 


}

function ResumeGame () {
	
}