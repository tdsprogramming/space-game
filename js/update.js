function update(){
    if(this.cursors.left.isDown){
        this.player1.setVelocityX(-300);
    }
    else if(this.cursors.right.isDown){
        this.player1.setVelocityX(300);
    }
    else{
        this.player1.setVelocityX(0);
    }

    if(this.cursors.up.isDown){
        this.player1.setVelocityY(-300);
    }
    else if(this.cursors.down.isDown){
        this.player1.setVelocityY(300);
    }
    else{
        this.player1.setVelocityY(0);
    }
}

export default update;
