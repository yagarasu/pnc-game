import Phaser from 'phaser'
import { loadWebfonts } from 'utils'

export default class extends Phaser.State {
  init () {
    this.fontsLoaded = false
  }

  preload () {
    this.add.text(
      this.world.centerX,
      this.world.centerY,
      'Loading...',
      {
        font: '16px Arial',
        fill: '#dddddd',
        align: 'center'
      }
    ).anchor.setTo(0.5, 0.5)

    // Load webfonts
    loadWebfonts([
      'Bangers'
    ]).then(() => this.fontsLoaded = true)

    // Load assets
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  render () {
    if (this.fontsLoaded) {
      this.state.start('Parallax')
    }
  }
}
