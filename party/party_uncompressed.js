document.addEventListener("DOMContentLoaded", function(){
	var input = "";
	var party = false;
	var speed = 200;

	document.addEventListener("keydown", function(a){
		if (party)
			return;
		input+=String.fromCharCode(a.keyCode);
		if (input.substring(input.length-6)=="SECRET"){
			party=true;
			document.body.innerHTML = "<audio src='https://incompetech.com/music/royalty-free/mp3-royaltyfree/Who%20Likes%20to%20Party.mp3' loop='true' autoplay></audio><div id='text' style='font-family:Arial;font-weight:bold;font-size:120px;text-align:center;text-shadow: black 0px 0px 10px'>SECRET MODE ACTIVATED!</div>"
			console.log("DROP IT!");
			setInterval(function() {
				var text = document.getElementById("text");
				text.style['color'] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
				document.body.style['background-color'] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
				text.style['text-shadow'] = '#'+(Math.random()*0xFFFFFF<<0).toString(16)+" 0px 0px 15px";
				document.title="PARTY!";
			},speed);

		}
	});
});

