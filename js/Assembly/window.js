//窗口组件
function Window (){
	allCloseButtons = document.getElementsByClassName ("windowClose");
	for (var i = 0; i < allCloseButtons.length; i++){
		allCloseButtons[i].onclick = function (){
			this.parentNode.parentNode.parentNode.parentNode.style.display = "none";
		};
	}
	allWindowHead = document.getElementsByClassName ("windowHead");
	allWindow = document.getElementsByClassName ("window");
	DragFirstMouseToLeftTop = [];
	DragMousePoint = [];
	DragOnMouseUp = [];
	DragTimer = [];
	ResizeFirstMousePointLeftTop = [];
	ResizeFirstMousePointBottomRight = [];
	ResizeMousePoint = [];
	ResizeOnMouseUp = [];
	ResizeTimer = [];
	for (var i = 0; i < allWindowHead.length; i++){
		allWindowHead[i].addEventListener("mousedown", function (e){
			//DragFirstMouseToLeftTop[i] = getPointOnDocument (allWindowHead[i], MousePoint.x, MousePoint.y);
			DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)] = getPointOnElement (this.parentNode.parentNode, MousePoint.x, MousePoint.y);
			DragOnMouseUp[getElementInArray (this, allWindowHead)] = false;
			var self = this;
			DragTimer[getElementInArray (this, allWindowHead)] = setInterval(function (){
				//console.log(123);
				if (DragOnMouseUp[getElementInArray (self, allWindowHead)] == false){
					DragMousePoint[getElementInArray (self, allWindowHead)] = {
						x : MousePoint.x,
						y : MousePoint.y
					};
					//console.log(123);
					//alert(DragFirstMouseToLeftTop[getElementInArray (self, allWindowHead)].x);
					self.parentNode.parentNode.style.top = (DragMousePoint[getElementInArray (self, allWindowHead)].y - DragFirstMouseToLeftTop[getElementInArray (self, allWindowHead)].y) + "px";
					self.parentNode.parentNode.style.left = (DragMousePoint[getElementInArray (self, allWindowHead)].x - DragFirstMouseToLeftTop[getElementInArray (self, allWindowHead)].x) + "px";
				}
			}, 10);
			/*this.onmousemove = function (){
				if (DragOnMouseUp[getElementInArray (this, allWindowHead)] == false){
					DragMousePoint[getElementInArray (this, allWindowHead)] = {
						x : MousePoint.x,
						y : MousePoint.y
					};
					//alert(DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x);
					this.parentNode.style.top = (DragMousePoint[getElementInArray (this, allWindowHead)].y - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].y) + "px";
					this.parentNode.style.left = (DragMousePoint[getElementInArray (this, allWindowHead)].x - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x) + "px";
				}
				this.onmouseup = function (){
					DragOnMouseUp[getElementInArray (this, allWindowHead)] = true;
					//alert (DragOnMouseUp[getElementInArray (this, allWindowHead)]);
				};
				//this.onmouseout = function (){
				//	DragOnMouseUp[getElementInArray (this, allWindowHead)] = true;
				//};
			};*/
		});
		/*
		allWindowHead[i].onmousemove = function (){
			if (DragOnMouseUp[getElementInArray (this, allWindowHead)] == false){
				DragMousePoint[getElementInArray (this, allWindowHead)] = {
					x : MousePoint.x,
					y : MousePoint.y
				};
				//alert(DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x);
				this.parentNode.style.top = (DragMousePoint[getElementInArray (this, allWindowHead)].y - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].y) + "px";
				this.parentNode.style.left = (DragMousePoint[getElementInArray (this, allWindowHead)].x - DragFirstMouseToLeftTop[getElementInArray (this, allWindowHead)].x) + "px";
			}
		};*/
		allWindowHead[i].addEventListener("mouseup", function (){
			DragOnMouseUp[getElementInArray (this, allWindowHead)] = true;
			window.clearInterval(DragTimer[getElementInArray (this, allWindowHead)]);
			//alert (DragOnMouseUp[getElementInArray (this, allWindowHead)]);
		});
		//修改宽高
		allWindow[i].addEventListener("mousedown", function (){
			ResizeFirstMousePointLeftTop[getElementInArray (this, allWindow)] = MousePoint;
			ResizeFirstMousePointBottomRight[getElementInArray (this, allWindow)] = {
				x: screenWidth - MousePoint.x,
				y: screenHeight - MousePoint.y
			};
			ResizeOnMouseUp[getElementInArray (this, allWindow)] = false;
			var self = this;
			var selfStyle = window.getComputedStyle(self);
			var direction;
			/*
			if (getPointOnElement (self, MousePoint.x, MousePoint.y).x <= 4 && getPointOnElement (self, MousePoint.x, MousePoint.y).x >= 0){
				if (getPointOnElement (self, MousePoint.x, MousePoint.y).y <= 4 && getPointOnElement (self, MousePoint.x, MousePoint.y).y >= 0){
					console.log("lt");
					direction = "lt";
					main.style.cursor = "nwse-resize";
					//self.style.height = (parseInt(selfStyle.height) + (screenHeight - MousePoint.y) - ResizeFirstMousePointBottomRight[getElementInArray (this, allWindow)].y) + "px";
				}else if (getPointOnElement (self, MousePoint.x, MousePoint.y).y >= 4 + parseInt(window.getComputedStyle(self.children[0]).height) && getPointOnElement (self, MousePoint.x, MousePoint.y).y <= 8 + parseInt(window.getComputedStyle(self.children[0]).height)){
					console.log("lb");
					direction = "lb";
					main.style.cursor = "nesw-resize";
				}else {
					console.log("l");
					direction = "l";
					main.style.cursor = "ew-resize";
				}
			}else if (getPointOnElement (self, MousePoint.x, MousePoint.y).x >= 4 + parseInt(window.getComputedStyle(self.children[0]).width) && getPointOnElement (self, MousePoint.x, MousePoint.y).x <= 8 + parseInt(window.getComputedStyle(self.children[0]).width)){
				
			}else if (getPointOnElement (self, MousePoint.x, MousePoint.y).y <= 4 && getPointOnElement (self, MousePoint.x, MousePoint.y).y >= 0){
				
			}else if (getPointOnElement (self, MousePoint.x, MousePoint.y).y >= 4 + parseInt(window.getComputedStyle(self.children[0]).height) && getPointOnElement (self, MousePoint.x, MousePoint.y).y <= 8 + parseInt(window.getComputedStyle(self.children[0]).height)){
				
			}*/
			ResizeTimer[getElementInArray (this, allWindow)] = setInterval(function (){
				//console.log(123);
				if (ResizeOnMouseUp[getElementInArray (self, allWindow)] == false){
					ResizeMousePoint[getElementInArray (self, allWindow)] = {
						x : MousePoint.x,
						y : MousePoint.y
					};
					switch (direction){
						case "lt":
							
							break;
						case "lb":
							
							break;
						case "l":
							
							break;
						case "rt":
							
							break;
						case "rb":
							
							break;
						case "r":
							
							break;
						case "t":
							
							break;
						case "b":
							
							break;
					}
				}
			}, 10);
		});
		document.addEventListener("mouseup", function (){
			ResizeOnMouseUp[getElementInArray (this, allWindow)] = true;
			window.clearInterval(ResizeTimer[getElementInArray (this, allWindow)]);
			//alert (DragOnMouseUp[getElementInArray (this, allWindowHead)]);
			//main.style.cursor = "default";
		});
	}
}
//重启窗口组件
function RestartWindow (){
	Window();
}
//