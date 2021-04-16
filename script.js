<script>
	var ran = parseInt(Math.random() * 100);
var count=1;
	function checknum() {
		console.log(document.getElementById("guessNum"));
		var s1 = parseInt(document.getElementById("guessNum").value);

		if (s1 > ran) {

			document.getElementById("suu").innerHTML = "大了";
		} else if(s1<ran){

			document.getElementById("suu").innerHTML = "小了" ;

		}else{
			document.getElementById("suu").innerHTML = "正确" ;
		}
	}

	function curNum() {
		document.getElementById("curent").innerHTML = ran;
	}
</script>
