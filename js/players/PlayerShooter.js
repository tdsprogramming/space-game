class PlayerShooter extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key, direction){
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.body.velocity.x = 800*direction.x;
        this.body.velocity.y = 800*direction.y;
    }
}

export default PlayerShooter;
