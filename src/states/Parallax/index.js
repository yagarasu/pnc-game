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
  }

  render() {

  }
}
