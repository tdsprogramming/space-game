import Player from './players/player.js';

function create(){
    var level = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(400, 300, 'sky');

    this.player1 = this.physics.add.sprite(100, 100, 'squadron');
    this.player1.setBounce(0.2);
    this.player1.setCollideWorldBounds(true);

    this.player2 = this.physics.add.sprite(100, 200, 'enemy');
    this.player2.setBounce(0.2);
    this.player2.setCollideWorldBounds(true);

    this.physics.add.collider(this.player1, this.player2);


}

export default create;
