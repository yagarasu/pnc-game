import 'pixi'
import 'p2'
import Phaser from 'phaser'

import config from './config'
import Game from './Game'

window.game = new Game(config)

// @TODO: Cordova. Is it needed?
// if (window.cordova) {
//   var app = {
//     initialize: function () {
//       document.addEventListener(
//         'deviceready',
//         () => {
//           window.game.state.start('Boot')
//         },
//         false
//       )
//     }
//   }
//
//   app.initialize()
// }
