import Phaser from 'phaser'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    const hScale = this.game.height / 1080

    this.parallaxParts = {}
    this.parallaxPartsSpeed = {}
    for (var i = 7; i >= 1; i--) {
      const name = 'parallax-' + i
      this.parallaxParts[name] = this.add.tileSprite(0, 0 , this.game.width, this.game.height, name)
      this.parallaxParts[name].tileScale.x = hScale
      this.parallaxParts[name].tileScale.y = hScale
      this.parallaxPartsSpeed[name] = ((7 - i) * (7 - i)) / 7.5
    }

    const bannerText = 'Parallax test'
    let banner = this.add.text(10, 10, bannerText, {
      font: '20px Bangers',
      fill: '#e57b0f',
      smoothed: true
    })
  }

  update() {
    for (var i = 7; i >= 1; i--) {
      const name = 'parallax-' + i
      this.parallaxParts[name].tilePosition.x -= this.parallaxPartsSpeed[name]
    }
  }
}
