#pragma strict

function Start () {}

// Player Hits IT
var weHitItsAlready:boolean = false;
function OnTriggerEnter2D(other:Collider2D){ //if it hits 

	if (other.gameObject.tag != "Player") return; //if something hits this and its not the player....ignore it
	
	if(weHitItsAlready) return;
	weHitItsAlready = true;

	Debug.Log("Bottle Hit");

	Destroy(this.gameObject);

}


function FixedUpdate () {
	
			
	
}