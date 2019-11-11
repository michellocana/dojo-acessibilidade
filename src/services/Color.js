import _ from 'lodash'
import getContrastRatio from 'get-contrast-ratio'

class ColorService {
  static getRandomColor() {
    const r = _.random(0, 255)
    const g = _.random(0, 255)
    const b = _.random(0, 255)

    return `rgb(${r}, ${g}, ${b})`
  }

  static getContrast(color, color2) {
    return getContrastRatio(color, color2).toFixed(2)
  }
}

export default ColorService
