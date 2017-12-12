const   antlr4            = antlr4_require('antlr4/index');
const { potigolParser   } = antlr4_require('./../parser/potigolParser');
const { potigolListener } = antlr4_require('./../parser/potigolListener');
const potigol = antlr4_require('./potigol');
// Os valores de listenerData são limpos a cada execução dentro de index.js
class Loader extends potigolListener {
  constructor() {
    super();
  }
  exitProg(ctx){
  
  }
  exitEscreva(ctx){
    var exp = ctx.expr();
    listenerData.setValue(ctx, new potigol.Escreva(exp));
  }
  exitSe(ctx){
    //     final List<String> senaose = new ArrayList<String>();
    // for (final SenaoseContext c : ctx.senaose()) {
    //     senaose.add(data.getValue(c));
    // }
    // final String cond = data.getValue(ctx.expr());
    // final String entao = data.getValue(ctx.entao());
    // final String senao = data.getOrElse(ctx.senao());
    // final String resposta = M.se(cond, entao, senaose, senao);
    
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
