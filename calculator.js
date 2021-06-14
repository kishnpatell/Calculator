<html>
<head>

	<title> Calculator </title>
</head>

<script language="javascript">
	function op(str)
	{
		if(!Number(f1.no1.value) || !Number(f1.no2.value))
		{
			alert("Not a Number");
			reset();
		}
		else
		{
			if(str=="add")
			{
				f1.res.value=parseInt(f1.no1.value)+parseInt(f1.no2.value);
			}
			if(str=="sub")
			{
				f1.res.value=(f1.no1.value)-(f1.no2.value);
			}
			if(str=="mul")
			{
				f1.res.value=(f1.no1.value)*(f1.no2.value);
			}
			if(str=="div")
			{
				f1.res.value=(f1.no1.value)/(f1.no2.value);
			}
		}
	}
	function reset()
	{
		f1.no1.value="";
		f1.no2.value="";
		f1.no3.value="";
	}
	
	</script>
	
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
