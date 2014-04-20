Node.append.js
=======

Dependancies: <a href="https://github.com/BrittonRT/Node.fragment.js">Brittonrt/Node.fragment.js</a>

A very simple DOM library for Javascript.

This library extends the Node object and adds an "append" and "prepend" methods. These methods take an unlimited number of arguments, and each argument is either a reference to a DOM element, or a string which will be turned into a text node.  If multiple arguments are passed in, a DocumentFragment will be used to optimize the append/prepend.


Basic Usage
-----------

<pre>
document.body.append(
	document.createElement('p'),
	'hello'
)
</pre>

Produces:

<pre>
<body>
	<p></p>
	"hello"
</body>
</pre>


Node.fragment.js Usage
-----------

Can also be used in conjunction with Node.fragment.js since it depends on it:

<pre>
document.body.append(
	p('hello'),
	div(
		p('inside')
	)
)
</pre>

Produces:

<pre>
<body>
	<p>hello</p>
	<div>
		<p>inside</p>
	</div>
</body>
</pre>
