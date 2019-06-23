var get_title = document.getElementById("index_top_title");
	get_title_list = get_title.getElementsByTagName('li');

for (var i = 0; i < get_title_list.length; i++) {
	get_title_list[i].onmouseover = function(){
		for (var j = 0; j < get_title_list.length; j++) {
			get_title_list[j].className = 'fl';
		}
	}
	get_title_list[i].index = i ;
	get_title_list[i].onmouseout = function(){
		get_title_list[this.index].className = 'fl active';
		
	}


}
