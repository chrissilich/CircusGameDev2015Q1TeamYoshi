#pragma strict


var weHitItsAlready:boolean = false;

function OnTriggerEnter2D(other:Collider2D){ //if it hits 

	if (other.gameObject.tag != "Player") return; //if something hits this and its not the player....ignore it
	
	if(weHitItsAlready) return;
	weHitItsAlready = true;

	Debug.Log("coin");

//	Destroy(gameObject, 0.1);
	
//	var animController:Animator = gameObject.GetComponent("Animator");
//	animController.enabled = true;	
	
}


