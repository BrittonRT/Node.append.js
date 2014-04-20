/*
**  Node.append.js
**
**  Dependencies: Node.fragment.js
*/
;(function(Node) {
	'use strict';
	/* -- CONSTANTS --*/
	var frag = Node.fragment;
	/* -- DEPENDANCIES -- */
	if (!frag) throw new Error('Node.fragment.js must be loaded before loading Node.append.js');
	/* -- APPEND -- */
	Node.prototype.append = function() {
		return this.appendChild(frag.apply(this, arguments));
	}
	/* -- PREPEND -- */
	Node.prototype.prepend = function() {
		return this.insertBefore(frag.apply(this, arguments), this.firstChild);
	}
})(Node);