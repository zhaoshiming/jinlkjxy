window.onload=function(){

	show('pics' , 1000,3);
	function show(id,img_width,img_count){
		var oLunbo = document.getElementById(id);//动的主体ul
		//var oOl = document.getElementById("ol1");//按钮
		var oUl = oLunbo.getElementsByTagName("ul")[0];
		var oUl2 = oLunbo.getElementsByTagName("ul")[1];//lunbo_btn
		var btn = oUl2.getElementsByTagName("li");//得到按钮数，和图片数一样
		var imgWidth = img_width;
		//鼠标滑过数字键改变样式
		var num =0;
		var timer = null;
		for(var i=0;i<btn.length;i++){
			btn[i].index = i;//将设置当前btn的索引值
			btn[i].onmousemove=function(){
				for(var j=0;j<btn.length;j++){
					btn[j].className ='';
				}
				this.className='active';
				//索引值*宽度就是要移动的距离
				Move(oUl,'left',-this.index*imgWidth);
			};
		}
		function auto(){
			if(num>(img_count-1)){
				num=0;
			}
			Move(oUl,'left',-num*imgWidth);
			for(var i=0;i<btn.length;i++){
				btn[i].className='';
				btn[num].className='active';
			}
			num++;
		}
		auto();
		timer= setInterval(auto,5000);
		oLunbo.onmousemove=function(){
			clearInterval(timer);
		};
		oLunbo.onmouseout=function(){
			timer= setInterval(auto,5000);
		};

	}

	
}