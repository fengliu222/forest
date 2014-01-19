require (require) ->
	$ = require 'jquery'

	###
		Css sprites工厂
		config = [
			src
			frameWidth
			frameHeigh
			startX
			startY
			startIndex
			endIndex
			frameCount
		]
	###

	sprites = (config) ->
		this.curIndex = 0
		if config
			for key in config 
				this[key] = if config[key] then config[key] else 0

	a=5
	
