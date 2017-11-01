const antlr4 = antlr4_require('antlr4/index');
const listenerData = antlr4_require('lib/listenerData').listenerData;
const listenerUtils = antlr4_require('lib/listenerUtils').listenerUtils;
const {potigolParser} = antlr4_require('./../parser/potigolParser');
const {potigolListener} = antlr4_require('./../parser/potigolListener');

class Loader extends potigolListener {
  constructor() {
    super();
    this.utils = new listenerUtils();
    this.data = new listenerData();
  }
  exitEscreva(ctx){
    var res = ctx.expr().getText().replace(/"/g, ' ');
    this.utils.show(res);
  }
  exitTexto(ctx){
  }
  exitExpr1(ctx){
  }
  exitExpr2(ctx){show
  }
  exitAtrib_simples(ctx){
  }
  exitDeclVariavel(ctx){ 
  }
}

exports.Loader = Loader;