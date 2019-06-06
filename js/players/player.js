import PlayerShooter from './PlayerShooter.js';
import Entity from '../Entities/Entity.js';

class Player extends Entity{
    constructor(scene, x, y, key){
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("velocity", 200);
        this.setData("isDead", false);
        this.setData("health", 100);
        this.setData("blocks", null);
    }
    // create an x and y orientation method for easier calculation moveFroward, BAkcward and shoot
    rotateClockwise(){
        this.body.rotation += 5;
    }
    rotateCounterClockwise(){
        this.body.rotation -= 5;
    }
    moveForward(){
        this.body.velocity.x = -this.getData("velocity") * Math.sin(-this.body.rotation*.017);
        this.body.velocity.y = -this.getData("velocity") * Math.cos(-this.body.rotation*.017);
        if(this.getData('blocks') != null){
            this.getData('blocks').updateLocation();
        }
    }
    moveBackward(){
        this.body.velocity.x = this.getData("velocity") * Math.sin(-this.body.rotation*.017);
        this.body.velocity.y = this.getData("velocity") * Math.cos(-this.body.rotation*.017);
    }
    shoot(enemy){
        var shot = new PlayerShooter(
            this.scene,
            this.x,
            this.y,
            'star',
            {
                x: -Math.sin(-this.body.rotation*.017),
                y: -Math.cos(-this.body.rotation*.017)
            }
        );
        this.scene.physics.add.collider(shot, enemy, enemy.loseHealth, null, enemy);
    }
    loseHealth(){
        console.log(this.data.list.health -= 10);
    }
    addBlock(block){
        this.setData('blocks', block);
    }
}

export default Player;
