import ReactDOMServer from 'react-dom/server'
import prettier from 'prettier/standalone'
import htmlParser from 'prettier/parser-html'
import _ from 'lodash'

class ComponentToStringService {
  static convert(componentInstance) {
    let str = ReactDOMServer.renderToStaticMarkup(componentInstance)
      .replace(/></g, '>\n<')
      .replace(/<!--(.*?)-->/g, '')
      .replace(/(static)([^\s]*)/g, '$2')

    return _.unescape(
      prettier.format(str, {
        parser: 'html',
        plugins: [htmlParser]
      })
    )
  }
}

export default ComponentToStringService
