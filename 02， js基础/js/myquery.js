/**
 * 
 * @param {Object} id ： 传入一个标签的id的值
 * 函数功能：根据传入的id值，找到对应的标签元素
 * 
 * return功能：函数在运行的过程中，如果有运行结果，需要被调用该函数的人可以使用，那么需要使用
 *           return的语法规则，返回该运行结果。
 */
function $(id){
	return document.getElementById(id);
}
/**
 * 
 * @param {Object} obj  -- 要查找的对象
 * @param {Object} attr  -- 要查找的样式属性
 */
function getStyle(obj,attr){
        	// 判断是否是ie低版本浏览器
        	if(obj.currentStyle){ //ie低版本
        		return obj.currentStyle[attr];
        	}else{//其他浏览器
        		return getComputedStyle(obj)[attr];
        	}
}
/**
 * 
 * @param {Object} obj -- 移动的对象
 * @param {Object} attr -- 移动的方向(left/top)
 * @param {Object} step -- 每次移动的距离
 * @param {Object} target -- 移动的目标位置
 * @param {Object} callback -- 回调函数
 * *   功能：实现目标元素的逐渐移动
 */
   
function go(obj,attr,step,target,callback){
			// obj是一个对象，可以给该对象，添加一个属性timer,该属性表示定时器
			// 1. 清除obj对象绑定的定时器
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				 // 2. 完成对象的移动过程
				 // 获取到当前对象的位置 ：left值或top值
				 var nowLocation = getStyle(obj,attr);
				 // 得到新的位置
				 var newLocation = parseInt(nowLocation) + step ;
				 // 判断是否达到了目标位置
				 if(step <0){
				 	if(newLocation <=target){
				 		obj.style[attr] = target + "px";
				 	    clearInterval(obj.timer);// 清除定时器
				 	   if(callback){
				 	   	callback();
				 	   }
				 	}else{
				 		// 设置obj的新位置
				 		obj.style[attr] = newLocation+"px";
				 	} 
				 }else{
				 	 if(newLocation>=target ){
					 	// 如果新位置，超过了目标位置，就应该直接设置新位置为目标位置
					 	obj.style[attr] = target + "px";
					 	clearInterval(obj.timer);// 清除定时器
					 	if(callback){
				 	   	callback();
				 	   }
				 	}else{
				 		// 设置obj的新位置
				 		obj.style[attr] = newLocation+"px";
				 	} 
				 }
			},48);
		}




		function hide(obj,step,callback){
			
			clearInterval(obj.timer2);
			obj.timer2 = setInterval(function(){
				
				var opt = getStyle(obj,"opacity");
				
				obj.style.opacity=parseFloat(opt) - step;
				if(parseFloat(opt)<=0){
					 clearInterval(obj.timer2)
					 if(callback){
				callback();
			}
				}
			},50)
			
		}
		

			function disappear(obj,step,callback){
						var n ; 
						step>0? n = 0: n = 1;
						clearInterval(obj.opt);
						
						obj.opt = setInterval(function(){ 
							n = n+step;
							obj.style.opacity = n;
							if(n<=0 || n>=1){ 
								clearInterval(obj.opt);
								if(callback){ 
									callback();
								}
							}
						},100);
					}
			function doubleNum(n){
			if(n<10){
				return  "0"+n;
			}else{
				return  n;
			}
		}


	function shake(obj,attr,callback) {
				clearInterval(obj.abc);
				
				var arr = [];				
				for(var i=20;i>=0;i-=2){
					arr.push(i);
					arr.push(-i);
				}	
				var index = 0
				var oldleft = getStyle(obj,attr);
					obj.abc = setInterval(function(){				
					obj.style[attr]= parseInt(oldleft)+arr[index++]+"px";
					if(index==arr.length){
						clearInterval(obj.abc);
						
						if(callback){
							callback();
						}
					}
					
				},100)
				}


//定时器的命名:  timer   opt  timer2  abc