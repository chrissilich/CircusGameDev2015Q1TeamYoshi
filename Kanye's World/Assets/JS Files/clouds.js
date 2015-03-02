#pragma strict


public var acceleration:float = 0.3;
public var maxSpeed:float = 5;

function Start () {
	

	var sprite:Transform = this.transform.Find("Sprite"); //ref to sprite object. game anim obj
	var start = transform.position;
	start.x -= 1.1;

	if (rigidbody2D.gameObject.tag == "cloud"){
		rigidbody2D.velocity.x -= acceleration;
		// Debug.Log('CLOUD');
	}
}