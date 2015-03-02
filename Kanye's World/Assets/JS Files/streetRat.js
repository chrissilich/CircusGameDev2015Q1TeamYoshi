#pragma strict


public var acceleration:float = 0.3;
public var maxSpeed:float = 3;

function Start () {
	Debug.Log("Rats here");

	if (rigidbody2D.velocity.x < maxSpeed) {
		rigidbody2D.velocity.x += acceleration;
	}
	
}


// Player Hits IT
	var weHitItsAlready:boolean = false;
	function OnTriggerEnter2D(other:Collider2D){ //if it hits 

		if (other.gameObject.tag != "Player") return; //if something hits this and its not the player....ignore it
		
		if(weHitItsAlready) return;
		// weHitItsAlready = true;`

		Points.score -= 10;

		Debug.Log("rat attack");

		Destroy(this.gameObject);

	}



function FixedUpdate () {

}