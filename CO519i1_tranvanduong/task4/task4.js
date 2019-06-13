let rectangle = function (x,y,width,height) {
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.color = "#000000";
    this.render = function () {
        let c =document.getElementById("myCanvas")
        this.ctx = c.getContext('2d');
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x,this.y,this.width,this.height);
        this.ctx.fill();

    }
}
