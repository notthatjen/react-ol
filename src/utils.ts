class Utils {

  static findChild(data, component) {
    let result = [];
    data.map((child: any) => {
      if (!child.type) return; // Ignore non react elements
      if (child.type.name == component) result.push(child);
    });
    return result;
  }

}

export default Utils;