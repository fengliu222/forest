define (require) ->
	$ = require 'jquery'

	person = require './person'

	one = new person '../img/run.png'

	# setInterval (->
	# 	one.update()
	# 	)

	ctx = document.querySelector("#person").getContext("2d")
	ctx.font="30px"
	ctx.fillStyle = "#000"
	ctx.fillText "啊2啊",60,10
	ctx.save()
	ctx.font="30px"
	ctx.fillStyle = "#000"
	ctx.fillText "啊啊啊",10,10
	ctx.restore()


 		
