#pragma strict

public var jumpSpeed:float = 10;
public var acceleration:float = 0.2;
public var maxSpeed:float = 15;
public var slideSpeed: float = 20;

public var ratPoint :int = 10;

function Start () {
	Debug.Log("Character Start Function");

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
	start.x -= 1.1;
	
	Debug.DrawRay( start, -Vector2.up * 0.1, Color.red, 1 );
	
	var grounded:RaycastHit2D = Physics2D.Raycast( start, -Vector2.up, 0.1 );

	// CHANGE WALKING STATES
	if(grounded.collider){
		animController.SetInteger("State",0);
	} else{
		animController.SetInteger("State",1);
	}

	
	if(collider2D.gameObject.tag == "rat") {
		Debug.Log('HIT RAT!');
	}


	//if he's on the ground n up key is hit
	if (Input.GetKey(KeyCode.UpArrow) && grounded.collider) { 
		rigidbody2D.velocity.y = jumpSpeed;
	} else if(Input.GetKey(KeyCode.DownArrow) && grounded.collider ){
		rigidbody2D.velocity.x = slideSpeed;
	}else if(Input.GetKey(KeyCode.Space) && grounded.collider){
		rigidbody2D.velocity.x = maxSpeed;
	}
	 else{
		rigidbody2D.velocity.x = maxSpeed;
	}

	// SCORING altered so the score only logs once per keypress
	if (Input.GetKeyDown(KeyCode.UpArrow) && grounded.collider) { //if he's on the ground n up key is hit
		Points.score += 10.00;
	} else if(Input.GetKeyDown(KeyCode.DownArrow) && grounded.collider ){
		Points.score += 20.00;
	}else if(Input.GetKeyDown(KeyCode.Space) && grounded.collider){
		Points.score += 30.00;
	}

	
	// When Game Ends
	if (transform.position.y < -2) {
		rigidbody2D.velocity.x = 0;
		transform.position.x = -68.66307;
		transform.position.y = 2;
		
		Application.LoadLevel("Level 1"); //loads any level
	}
	
	Debug.Log(rigidbody2D.velocity.x);
}