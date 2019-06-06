import Entity from '../Entities/Entity.js';

class Block extends Entity{
    constructor(scene, player, key, relativeX, relativeY){
        super(scene, player.x, player.y, key);
        this.setData("player", player)
        this.setData("relativeX", relativeX);
        this.setData("relativeY", relativeY);
        this.scene.physics.add.collider(this, player);
        this.updateLocation();

        this.setData("velocity");
        this.setData("isDead", false);
        this.setData("health", 100);
    }
    updateLocation(){
        this.x = this.getData("player").x + this.getData("player").width * this.getData('relativeX');
        this.y = this.getData("player").y + this.getData("player").height * this.getData('relativeY');
    }
}
export default Block;
