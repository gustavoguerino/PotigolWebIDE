const antlr4 = antlr4_require('antlr4/index');
const {data} = antlr4_require('lib/listenerData');
const {utils} = antlr4_require('lib/listenerUtils');
const {potigolParser} = antlr4_require('./../parser/potigolParser');
const {potigolListener} = antlr4_require('./../parser/potigolListener');

class Loader extends potigolListener {
  constructor() {
    super();
  }
  exitEscreva(ctx){
    var res = ctx.expr().getText().replace(/"/g, ' ');
    console.log(res);
  }
  exitTexto(ctx){
  }
  exitExpr1(ctx){
  }
  exitExpr2(ctx){
  }
  exitAtrib_simples(ctx){
  }
  exitDeclVariavel(ctx){ 
  }
}

exports.Loader = Loader;