function helloWorld() {
	<HTML>
<HEAD>
<TITLE> Hello World in Javascript </TITLE>
</HEAD>
<BODY>
<h2>Example 1</h2>

<script language="Javascript">
// Hello in Javascript


// display prompt box that ask for name and 
// store result in a variable called who
var who = window.prompt("What is your name");

// display prompt box that ask for favorite color and 
// store result in a variable called favcolor
var favcolor = window.prompt("What is your favorite color");

// write "Hello" followed by person' name to browser window
document.write("Hello " + who);

// Change background color to their favorite color
document.bgColor = favcolor;

</script>


</BODY>
</HTML>alert("Hi there");
}