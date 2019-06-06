import PlayerShooter from './PlayerShooter.js';
import Entity from '../Entities/Entity.js';

class Player extends Entity{
    constructor(scene, x, y, key){
        super(scene, x, y, key);
        this.setData("velocity", 200);
        this.setData("isDead", false);
        this.setData("health", 100);
        this.setData("blocks", []);
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
        this.scene.physics.add.collider(shot, enemy, enemy.loseHealth(10), null, enemy);
    }
    addBlock(block){
        var blocks = this.getData('blocks');
        console.log(typeof(blocks), blocks);
        blocks.push(block);
        this.setData('blocks', blocks);
    }
}

export default Player;
