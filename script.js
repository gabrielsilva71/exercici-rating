function starmark(item) {
	var count=item.id[0];
	var subid=item.id.substring(1);
	for(var i=0;i<5;i++) {
		if(i<count)
		{
			document.getElementById((i+1)+subid).style.color="#F8D005";
			}
		else {
			document.getElementById((i+1)+subid).style.color="black";
		}

	}

}

var modal = document.getElementById('div');

window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById('1one').style.color = 'black';
        document.getElementById('2one').style.color = 'black';
        document.getElementById('3one').style.color = 'black';
        document.getElementById('4one').style.color = 'black';
        document.getElementById('5one').style.color = 'black';                   	 
    }
}


