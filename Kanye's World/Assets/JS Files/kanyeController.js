﻿#pragma strict

public var jumpSpeed:float = 3;
public var acceleration:float = 1;
public var maxSpeed:float = 15;
public var slideSpeed: float = 5;
public var stop: float = 0;

var ratPoint :int = 10;
var bottlePoint :int = 20;
var papparazoPoint :int = 30;
function Start () {
	Debug.Log("Character Start Function");

}

function FixedUpdate () {
	
	var sprite:Transform = this.transform.Find("Sprite"); //ref to sprite object. game anim obj
	var animController: Animator = sprite.GetComponent("Animator");	

	animController.SetInteger("State",1);
	
	var start = transform.position;
	start.y -= 1.1;
	
	Debug.DrawRay( start, -Vector2.up * 0.1, Color.red, 1 );
	
	var grounded:RaycastHit2D = Physics2D.Raycast( start, -Vector2.up, 0.1 );

	if(collider2D.gameObject.tag == "rat") {
		Debug.Log('HIT RAT!');
		Points.score -= ratPoint;
	} else if (collider2D.gameObject.tag == "bottle") {
		Points.score -= bottlePoint;
	} else if (collider2D.gameObject.tag == "papps") {
		Points.score -= papparazoPoint;
	}

	// if going right. accel right walk right
	if (Input.GetKey(KeyCode.RightArrow)) {
		rigidbody2D.velocity.x += 1;
		animController.SetInteger("State",0);
	// if going left. accell left walk left

	} else if (Input.GetKey(KeyCode.LeftArrow)) {
		rigidbody2D.velocity.x -= 1;
		animController.SetInteger("State",2);
	// if up is hit. jump. show jump sprite

	} else if (Input.GetKey(KeyCode.UpArrow)) { 
		rigidbody2D.velocity.y = jumpSpeed;
		animController.SetInteger("State",3);
	// if down arrow. slide. show slide sprite

	} else if (Input.GetKey(KeyCode.DownArrow)) { 
		rigidbody2D.velocity.x = slideSpeed;
		animController.SetInteger("State",5);
	// if not moving at all stop acceleration

	}else if(Input.GetKey(KeyCode.Space)){
		rigidbody2D.velocity.x = maxSpeed;
		animController.SetInteger("State",4);
	} else if(Input.GetAxis("Horizontal") > 0 && Input.GetKey(KeyCode.UpArrow)){
		rigidbody2D.velocity.y = jumpSpeed;
		rigidbody2D.velocity.x += 0.3;
	} else {
		rigidbody2D.velocity.x = stop;
		animController.SetInteger("State",1);
	};


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
		
		Application.LoadLevel("death"); //loads any level
	}
	
}