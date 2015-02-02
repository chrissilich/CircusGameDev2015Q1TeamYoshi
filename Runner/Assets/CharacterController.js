#pragma strict

public var jumpSpeed:float = 8;
public var acceleration:float = 0.2;
public var maxSpeed:float = 15;

function Start () {
	Debug.Log("Character Start Function");
	
	// rigidbody2D.velocity.y = 8;
}

function FixedUpdate () {
	
	var sprite:Transform = this.transform.Find("Sprite"); //ref to sprite object. game anim obj
	var animController: Animator = sprite.GetComponent("Animator");	
//	Debug.Log(animController);
	animController.SetInteger("State",1);
	
		
	if (rigidbody2D.velocity.x < maxSpeed) {
		rigidbody2D.velocity.x += acceleration;
	}
	
	var start = transform.position;
	start.y -= 1.1;
	
	Debug.DrawRay( start, -Vector2.up * 0.1, Color.red, 1 );
	
	var grounded:RaycastHit2D = Physics2D.Raycast( start, -Vector2.up, 0.1 );

	if(grounded.collider){
		animController.SetInteger("State",0);
	} else{
		animController.SetInteger("State",1);
	}

	if (Input.GetAxis("Vertical") && grounded.collider) { //if he's on the ground n up key is hit
		Debug.Log("JUMP");
		rigidbody2D.velocity.y = jumpSpeed;
	}	
	
	
	if (transform.position.y < -2) {
		rigidbody2D.velocity.x = 0;
		transform.position.x = -68.66307;
		transform.position.y = 2;
		
		Application.LoadLevel("Level 1"); //loads any level
	}
	
	// Debug.Log(rigidbody2D.velocity.x);
}