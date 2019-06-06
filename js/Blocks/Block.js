class Block extends  Phaser.Physics.Arcade.Sprite{
    constructor(scene, player, key, relativeX, relativeY){
        super(scene, player.x, player.y, key);
        this.setData("player", player)
        this.setData("relativeX", relativeX);
        this.setData("relativeY", relativeY);
        this.updateLocation();
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.scene.physics.add.collider(this, player);
        this.setCollideWorldBounds(true);

        this.setData("velocity");
        this.setData("isDead", false);
        this.setData("health", 100);
    }
    updateLocation(){
        this.x = this.getData("player").x + this.getData("player").width * this.getData('relativeX');
        this.y =this.getData("player").y + this.getData("player").height * this.getData('relativeY');
    }
}
export default Block;
