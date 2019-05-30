import Player from '../Players/Player.js';
import PlayerShooter from '../Players/PlayerShooter.js';

class SceneMain extends Phaser.Scene{
    constructor(){
        super({key: "SceneMain"});
    }

    preload(){
        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('squadron1', 'assets/sprites/bsquadron1.png');
        this.load.image('squadron2', 'assets/sprites/bsquadron2.png');
        this.load.image('star', 'assets/phaser3/star2.png');
        this.load.image('sky', 'assets/skies/gradient1.png');
    }

    create(){
        this.add.image(400, 300, 'sky');
        this.playerOne = new Player(
            this,
            this.game.config.width * .1,
            this.game.config.width * .1,
            'squadron1'
        );
        this.playerOne.setCollideWorldBounds(true);

        //NOTE: Go back and refactor by adding this keys as a constructor to the Player
        this.keyPlayerOneForward = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyPlayerOneBackward = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.keyPlayerOneRotateClockwise = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyPlayerOneRotateCounterClockwise = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyPlayerOneRotateCounterClockwise = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyPlayerOneShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);

        this.playerTwo = new Player(
            this,
            this.game.config.width * .3,
            this.game.config.width * .3,
            'squadron2'
        );
        this.playerTwo.setCollideWorldBounds(true);

        this.keyPlayerTwoForward = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyPlayerTwoBackward = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyPlayerTwoRotateClockwise = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyPlayerTwoRotateCounterClockwise = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyPlayerTwoShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(this.playerOne, this.playerTwo);
    }
    update(){
        if(this.keyPlayerOneForward.isDown){
            this.playerOne.moveForward();
        }
        else if(this.keyPlayerOneBackward.isDown){
            this.playerOne.moveBackward();
        }
        if(this.keyPlayerOneRotateClockwise.isDown){
            this.playerOne.rotateClockwise();
        }
        else if(this.keyPlayerOneRotateCounterClockwise.isDown){
            this.playerOne.rotateCounterClockwise();
        }
        if(this.keyPlayerOneShoot.isDown){
            this.playerOne.shoot(this.playerTwo);
        }

        if(this.keyPlayerTwoForward.isDown){
            this.playerTwo.moveForward();
        }
        else if(this.keyPlayerTwoBackward.isDown){
            this.playerTwo.moveBackward();
        }
        if(this.keyPlayerTwoRotateClockwise.isDown){
            this.playerTwo.rotateClockwise();
        }
        else if(this.keyPlayerTwoRotateCounterClockwise.isDown){
            this.playerTwo.rotateCounterClockwise();
        }
        if(this.keyPlayerTwoShoot.isDown){
            this.playerTwo.shoot(this.playerOne);
        }
        if(this.playerOne.data.list.health <= 0){
            alert("Game over!");
        }
        if(this.playerOne.data.list.health <= 0){
            alert("Game over!");
        }
    }
}

export default SceneMain;
