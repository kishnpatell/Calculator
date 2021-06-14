<html>
<head>
	<title> Calculator </title>
</head>
/*  JAVASCRIPT  IN <SCRIPT> */

/*---------------------------------------------*/

/* CSS IN <STYLE>  */

	<body>
	<form name="f1">
	<center> <table border=2>
	
	<tr>
	<td> NO1 </td>
	<td><input type="text" name="no1"></td>
	</tr>
	
	<tr>
	<td> NO2 </td>
	<td><input type="text" name="no2"></td>
	</tr>
	
	<tr>
	<td colspan=2>
	<center>
	<input type="button" value="ADD" onclick=op("add")>
	<input type="button" value="SUB" onclick=op("sub")>
	<input type="button" value="MUL" onclick=op("mul")>
	<input type="button" value="DIV" onclick=op("div")>
	
	</center>
	</td>
	</tr>
	
	<tr>
	<td> RESULT : </td>
	<td><input type="text" name="res"></td>
	</tr>
	</center>
</table>
</body>
</html>
