import WebFont from 'webfontloader'

export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export const loadWebfonts = list => {
  return new Promise((resolve, reject) => {
    WebFont.load({
      google: {
        families: list
      },
      active: () => resolve(list),
      inactive: () => reject(list)
    })
  })
}
