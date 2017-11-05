const   antlr4            = antlr4_require('antlr4/index');
const { potigolParser   } = antlr4_require('./../parser/potigolParser');
const { potigolListener } = antlr4_require('./../parser/potigolListener');
const { ListenerData    } = antlr4_require('lib/listenerData');
const potigol = antlr4_require('./potigol');

class Loader extends potigolListener {
  constructor() {
    super();
  }
  exitEscreva(ctx){
    var exp = ctx.expr();
    listenerData.setValue(ctx, new potigol.Escreva(exp));
  }
  exitSe(ctx){
    console.log(ctx);
  }
  exitLit(ctx){
    listenerData.setValue(ctx, listenerData.getValue(ctx.literal()));
  }
  exitDecl_var_simples(ctx){
    var ids = listenerData.getValue(ctx.id1());
    var valor = listenerData.getValue(ctx.expr());
    listenerData.setValue(ctx, new potigol.DeclVariavel(ids,valor));
  }
  exitId1(ctx){
    listenerData.setValue(ctx, ctx.getText().split(","));
  }
  exitInteiro(ctx){
    listenerData.setValue(ctx, parseInt(ctx.getText()));
  }
}

exports.Loader = Loader;
