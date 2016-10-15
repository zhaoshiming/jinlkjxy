function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}//返回的是带单位的数值
}
	//var timer = null;
	//var alpha = 30;不能公用  公用就错了！！当作属性加到物体上 每人一个
function Move(obj,attr,iTarget,fnEnd){
		clearInterval(obj.timer);//清除定时器，防止多次点击出现加速现象  每个对象都加定时器 防止移动过快时停止
		obj.timer =setInterval(function(){
			var cur =0;//用于存储当前状态的值
			if(attr=='opacity'){
				cur =Math.round(parseFloat(getStyle(obj,attr))*100);//在这里四舍五入最好，预防透明度不稳定抖动
			}else{
				cur = parseInt(getStyle(obj,attr));//若不是透明度，直接强转成数值->'px'被去掉
			}
			 
			var speed = (iTarget-cur)/8;//这里设置变化速度
			speed=speed>0?Math.ceil(speed):Math.floor(speed);//速度必须取整 不取整会抖动
			if(cur==iTarget){//如果达到目标 则关闭定时器
				clearInterval(obj.timer);
				if(fnEnd) fnEnd();
			}else{
				if(attr=='opacity'){//透明度单独处理
					obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity = (cur+speed)/100;
				}else{
					obj.style[attr] = cur+speed+'px';//不是透明度，直接赋值
				}
			}
		},30);
	}