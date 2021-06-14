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
