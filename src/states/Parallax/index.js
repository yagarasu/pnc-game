import Phaser from 'phaser'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    const bannerText = 'Parallax test'
    let banner = this.add.text(10, 10, bannerText, {
      font: '20px Bangers',
      fill: '#77BFA3',
      smoothed: true
    })

    this.layer7 = this.add.tileSprite(0, 0 , this.game.width, this.game.height, 'parallax-3')
    this.layer7.tileScale.x = 0.5
    this.layer7.tileScale.y = 0.5
  }

  update() {
    this.layer7.tilePosition.x += 0.5
  }
}
