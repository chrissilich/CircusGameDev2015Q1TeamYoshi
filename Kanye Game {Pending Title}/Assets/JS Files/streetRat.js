#pragma strict


public var acceleration:float = 8;
public var maxSpeed:float = 10;

function Start () {
	Debug.Log("Rats here");

	if (rigidbody2D.velocity.x < maxSpeed) {
		rigidbody2D.velocity.x += acceleration;
	}
	

	var start = transform.position;
	start.y -= 1.1;
	// rigidbody2D.velocity.y = 8;
}

function FixedUpdate () {
	
	var sprite:Transform = this.transform.Find("Sprite"); //ref to sprite object. game anim obj
				
	
	// Debug.DrawRay( start, -Vector2.up * 0.1, Color.blue, 1 );
	
	// var grounded:RaycastHit2D = Physics2D.Raycast( start, -Vector2.up, 0.1 );


	if (transform.position.y < -2) {
		rigidbody2D.velocity.x = 3;
		transform.position.x = -68.66307;
		transform.position.y = 2;
		
		Application.LoadLevel("Level 1"); //loads any level
	}
	
	Debug.Log(rigidbody2D.velocity.x);
}