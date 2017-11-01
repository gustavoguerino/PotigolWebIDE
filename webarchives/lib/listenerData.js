const antlr4 = antlr4_require('antlr4/index');
//antlr4.tree.ParseTreeWalker.DEFAULT.walk(loader, tree); 
class listenerData {
  constructor() {
    this.values = new Map();
    this.warnings = [];
    this.errors = [];
  }
  setValue(node, value){
    this.values.set(node,value);
  }
  getValue(node){
      return this.values.get(node);
  }
}

exports.listenerData = listenerData;