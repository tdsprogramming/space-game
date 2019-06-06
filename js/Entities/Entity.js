class Entity extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, key){
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("health", 100);
    }
}

export default Entity;
