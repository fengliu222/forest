define (require) ->
	$ = require 'jquery'
	sprite = require './sprites'
	personCtx = document.querySelector("#person").getContext("2d")
	person = (src)->

		this.ui = new sprite {
			src : "../img/run.png"
			frameWidth : 35
			frameHeight : 35
		}

		this.update = ->
			console.log this.ui.next().x
			personCtx.drawImage(this.ui.next().obj, this.ui.next().x, this.ui.next().y, 35, 35)
		return 

	return person

 
