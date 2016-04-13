$(document).ready(function(){

	$.getJSON("js/goods.json/goods.json",function(shuju){
		$.each(shuju.data, function(index,val) {
			var msg="<div class='showShoppingPic'><dl><dt><a href='#'><img src="+val.pic+"/></a></dt>"+
									"<dd><a><p><b>"+val.name+"</b></p>"+
										"<p>"+val.introduce+"</p></a></dd>"+
								"<div><span>￥<a><b>"+val.nowprice+"</b></a></span>￥"+val.oldprice+"</div></dl></div>"
			$(".bodyRight_bottom_shopping").append(msg);								
		});
		//采用回调函数的方法绑定阴影事件
		$(".showShoppingPic").hover(function(){
			$(this).addClass("showShoppingPic2")
		},function(){
			$(this).removeClass("showShoppingPic2")
		})
		
	})
	
	
	$("#price").click(function(){
			this.style.color="red";
			var arr=new Array;
			$.getJSON("js/goods.json/goods.json",function(shuju){
				$.each(shuju.data, function(index,val) {
					arr[index]=val.nowprice;//提取价格
				});
			var lowToHeigh=binaryInsertionSort(arr);//
			console.info(lowToHeigh);
			$(".bodyRight_bottom_shopping>div").remove();
			$.getJSON("js/goods.json/goods.json",function(shuju){
				for (var i=0;i<lowToHeigh.length;i++) {
					$.each(shuju.data, function(index,val) {
					if (val.nowprice==lowToHeigh[i]) {
					var msg="<div class='showShoppingPic'><dl><dt><a href='#'><img src="+val.pic+"/></a></dt>"+
											"<dd><a><p><b>"+val.name+"</b></p>"+
												"<p>"+val.introduce+"</p></a></dd>"+
										"<div><span>￥<a><b>"+val.nowprice+"</b></a></span>￥"+val.oldprice+"</div></dl></div>"		
					$(".bodyRight_bottom_shopping").append(msg);	
					}
				});
				}							
			
				//采用回调函数的方法绑定阴影事件
				$(".showShoppingPic").hover(function(){
					$(this).addClass("showShoppingPic2")
				},function(){
					$(this).removeClass("showShoppingPic2")
				})
				
			})
			
			})
			
		})

	//二分法排序。按从小到大排序
	function binaryInsertionSort(array) {
					 　   if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
					     　   for (var i = 1; i < array.length; i++) {
					            var key = array[i], left = 0, right = i - 1;
					            while (left <= right) {
					                var middle = parseInt((left + right) / 2);
					                if (key < array[middle]) {
					                    right = middle - 1;
					                } else {
					                    left = middle + 1;
					                }
					            }
					            for (var j = i - 1; j >= left; j--) {
					                array[j + 1] = array[j];
					            }
					            array[left] = key;
					        }
					        return array;
					 　   } else {
					        return 'array is not an Array!';
					　    }
　　				}
	})