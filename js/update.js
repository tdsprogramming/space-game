function update(){
    if(this.cursors.left.isDown){
        this.player1.setRotation(this.player1.rotation-=.1)
    }
    else if(this.cursors.right.isDown){
        this.player1.setRotation(this.player1.rotation+=.1);
    }
    if(this.cursors.up.isDown){
        this.player1.setVelocityX(Math.sin(-this.player1.rotation)*-400);
        this.player1.setVelocityY(Math.cos(-this.player1.rotation)*-400);
    }
    else if(this.cursors.down.isDown){
        this.player1.setVelocityX(Math.sin(-this.player1.rotation)*400);
        this.player1.setVelocityY(Math.cos(-this.player1.rotation)*400);
    }

}

export default update;
