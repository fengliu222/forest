define (require) ->
	sprites = (config) ->
		this.curIndex = 0
		this.src = config.src || 'null'
		this.width = config.frameWidth || 35
		this.height = config.frameHeigh || 38
		this.x = this.startX || 0
		this.y = this.startY || 0
		this.sIndex = this.startIndex || 0
		this.eIndex = this.endIndex || 11
		this.frame = this.frameCount || 11
		this.imgObj = new Image()
		this.imgObj.src= config.src
		return 

	sprites.prototype.next = ->
		if this.curIndex < this.frame
			return {
				obj : this.imgObj
				x : (this.width * this.frame)
				y : this.y
			}
		else
			return {
				obj : this.imgObj
				x : this.x
				y : this.y
			}
		return 

	return sprites