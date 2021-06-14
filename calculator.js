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
	<style>
	 <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 10px;
  font-family: 'Nunito', sans-serif;
}
body{
  background-color: rgb(39, 39, 41);
  color: yellow;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
section{
  width: 100%;
}
.container{
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
}
form,.number-fact{
  width: 100%;
  background-color: rgb(92, 78, 92);
  padding: 20px;
  border-radius: 8px;
}
input[type="number"]{
  width: 70%;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #3a3a3b;
  font-size: 24px;
  color: aliceblue;
  padding-left: 10px;
}
input[type="number"]::placeholder{
  font-size: 24px;
  font-family: "Nunito";
  font-weight: 400;
}
button{
  display: inline-block;
  width: 25%;
  font-size: 24px;
  height: 40px;
  background-color:#3a3a3b;
  color: pink;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;
}
.number-fact{
  margin-top: 20px;
  height: auto;
  font-size: 20px;
}
@media only screen and (max-width: 678px){
  form button{
    font-size: 18px;
  }
  }
	</style>
	
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
