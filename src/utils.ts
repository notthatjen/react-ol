import * as Pluralize from 'pluralize';

class Utils {

  static findAllChild(children) {
    let result = {}
    children.map(child => {
      if (child.type) {
        let typeName = Pluralize.plural(child.type.name.toLowerCase())

        if (result[typeName]) {
          result[typeName].push(child)
        } else {
          result[typeName] = [child]
        }
      }
    });

    return result
  }
}

export default Utils;