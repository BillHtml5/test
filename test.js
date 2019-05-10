var yyy = document.getElementById('canvas');
var context = yyy.getContext('2d');
setCanvas(yyy)
listenMouse(yyy)

var usingEraser = false

pen.onclick = function() {
	usingEraser = false
	pen.classList.add('active')
	eraser.classList.remove('active')
}

eraser.onclick = function() {
	usingEraser = true
	eraser.classList.add('active')
	pen.classList.remove('active')
}

clean.onclick = function() {
	context.clearRect(0, 0, yyy.width, yyy.height);
}

black.onclick = function() {
	context.fillStyle = 'black'
	context.strokeStyle = 'black'
	black.classList.add('active')
	red.classList.remove('active')
	green.classList.remove('active')
	blue.classList.remove('active')
}

red.onclick = function() {
	context.fillStyle = 'red'
	context.strokeStyle = 'red'
	red.classList.add('active')
	black.classList.remove('active')
	green.classList.remove('active')
	blue.classList.remove('active')
}

green.onclick = function() {
	context.fillStyle = 'green'
	context.strokeStyle = 'green'
	green.classList.add('active')
	black.classList.remove('active')
	red.classList.remove('active')
	blue.classList.remove('active')

}

blue.onclick = function() {
	context.fillStyle = 'blue'
	context.strokeStyle = 'blue'
	blue.classList.add('active')
	black.classList.remove('active')
	red.classList.remove('active')
	green.classList.remove('active')
}


//----------------------------------------------
function setCanvas() {
	prt()
	window.onresize = function() {
		prt()
	}

	function prt() {
		var pageWidth = document.documentElement.clientWidth
		var pageHeight = document.documentElement.clientHeight

		yyy.width = pageWidth
		yyy.height = pageHeight
	}
}



function drawCircle(x, y, redius) {
	context.beginPath()
	context.arc(x, y, redius, 0, Math.PI * 2);
	context.fill()
}

function drawLine(x1, y1, x2, y2) {

	context.beginPath();
	context.lineWidth = 5
	context.moveTo(x1, y1)

	context.lineTo(x2, y2)
	context.stroke()
	context.closePath()

}


function listenMouse(yyy) {
	var painting = false
	var lastPoint = {
		x: undefined,
		y: undefined
	}

	//特性监控 
	if (document.body.ontouchstart !== undefined) {
		//触屏设备
		canvas.ontouchstart = function(aaa) {

			var x = aaa.touches[0].clientX
			var y = aaa.touches[0].clientY
			painting = true
			if (usingEraser) {
				context.clearRect(x - 10, y - 10, 10, 10)
			} else {
				var lastPoint = {
					"x": x,
					"y": y
				}
			}

		}
		canvas.ontouchmove = function(aaa) {

			var x = aaa.touches[0].clientX
			var y = aaa.touches[0].clientY
			if (!painting) {
				return
			}
			if (usingEraser) {
				context.clearRect(x - 10, y - 10, 10, 10)
			} else {
				var newPoint = {
					"x": x,
					"y": y
				}
				drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
				lastPoint = newPoint
			}
		}
		canvas.ontouchend = function() {
			painting = false
		}
	} else {
		// //非触屏设备
		var painting = false
		var lastPoint = {
			x: undefined,
			y: undefined
		}
		yyy.onmousedown = function(aaa) {

			var x = aaa.clientX
			var y = aaa.clientY
			painting = true
			if (usingEraser) {
				context.clearRect(x - 10, y - 10, 10, 10)
			} else {
				var lastPoint = {
					"x": x,
					"y": y
				}
			}
		}

		yyy.onmousemove = function(aaa) {
			var x = aaa.clientX
			var y = aaa.clientY
			if (!painting) {
				return
			}
			if (usingEraser) {
				context.clearRect(x - 10, y - 10, 10, 10)
			} else {
				var newPoint = {
					"x": x,
					"y": y
				}
				drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
				lastPoint = newPoint
			}

		}

		yyy.onmouseup = function(aaa) {
			painting = false
		}

	}


	yyy.onmousedown = function(aaa) {

		var x = aaa.clientX
		var y = aaa.clientY
		painting = true
		if (usingEraser) {
			context.clearRect(x - 10, y - 10, 10, 10)
		} else {
			var lastPoint = {
				"x": x,
				"y": y
			}
		}
	}

	yyy.onmousemove = function(aaa) {
		var x = aaa.clientX
		var y = aaa.clientY
		if (!painting) {
			return
		}
		if (usingEraser) {
			context.clearRect(x - 10, y - 10, 10, 10)
		} else {
			var newPoint = {
				"x": x,
				"y": y
			}
			drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
			lastPoint = newPoint

		}

	}

	yyy.onmouseup = function(aaa) {
		painting = false
	}

}
