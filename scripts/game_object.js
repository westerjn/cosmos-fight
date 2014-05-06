/* File: game_object.js
 *
 * A GameObject is a common interface object for dealing with most of the
 * sprites seen throughout the game. This interface includes the (x, y)
 * position of an object, and common functions necessary to use the object
 * in the Level subsystem.
 */

function GameObject() {

	// this object's on-screen (x, y) coordinates.
	this.x = 0;
	this.y = 0;
	
	// update function: update this object for this frame.
	this.update = function() { }
	
    // draw function: animate this object on the screen.
	this.draw = function(ctx) { }
	
	// position getters
	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.y;
	}
	
}