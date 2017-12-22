const   antlr4            = antlr4_require('antlr4/index');
const { potigolParser   } = antlr4_require('./../parser/potigolParser');
const { potigolListener } = antlr4_require('./../parser/potigolListener');
const potigol = antlr4_require('./potigol');
// Os valores de listenerData são limpos a cada execução dentro de index.js
class Loader extends potigolListener {
  constructor() {
    super();
  }
  /* --------------------------------------------------------------
  *
  *   Blocos principais (Responsaveis por encadear a execução)
  *
  * ---------------------------------------------------------------
  */  
  exitProg(ctx){
    // Para cada elemento de inst chamar o execute (Raiz do programa)
    ctx.inst().forEach(element => {
      // Verifica a existencia do node no get value, caso o mesmo ainda não tenha sido implementado,
      // evitando erros de execução
      let elemento = listenerData.getValue(element);
      if(elemento) elemento.execute();
    });
  }

  exitInst(ctx){
    // Para cada elemento de inst atribuir o filho ao node
    ctx.children.forEach(element => {
      // Verifica a existencia do node no get value, caso o mesmo ainda não tenha sido implementado,
      // evitando erros de execução
      let elemento = listenerData.getValue(element);
      if(elemento) listenerData.setValue(ctx, elemento);
    });
  }
  exitDecl(ctx){
    // Para cada declaração atribuir o filho ao node
    ctx.children.forEach(element => {
      // Verifica a existencia do node no get value, caso o mesmo ainda não tenha sido implementado,
      // evitando erros de execução
      let elemento = listenerData.getValue(element);
      if(elemento) listenerData.setValue(ctx, elemento);
    });
  }
  exitDecisao(ctx){
    //Para cada declaração atribuir o filho ao node
    ctx.children.forEach(element => {
      // Verifica a existencia do node no get value, caso o mesmo ainda não tenha sido implementado,
      // evitando erros de execução
      let elemento = listenerData.getValue(element);
      if(elemento) listenerData.setValue(ctx, elemento);
    });
  }
  exitDecis(ctx){
    //Para cada declaração atribuir o filho ao node
    ctx.children.forEach(element => {
      // Verifica a existencia do node no get value, caso o mesmo ainda não tenha sido implementado,
      // evitando erros de execução
      let elemento = listenerData.getValue(element);
      if(elemento) listenerData.setValue(ctx, elemento);
    });
  }
  /* -------------------------------------------------------------- 
  *
  *                     Condicionais
  *
  * ---------------------------------------------------------------
  */
  exitSe(ctx){
    let condicao = listenerData.getValue(ctx.expr());
    let entao = listenerData.getValue(ctx.entao());
    let senao = listenerData.getValue(ctx.senao());
    let senaose = listenerData.getValue(ctx.senaose());
    listenerData.setValue(ctx, new potigol.Se(condicao,entao,senao,senaose));
  }
  exitEscolha(ctx){
    console.log("escolha");
  }
  /* --------------------------------------------------------------
  *
  *                     Literais
  * 
  * ---------------------------------------------------------------
  */
  exitBooleano(ctx){
    console.log('booleano', ctx);
  }
  exitLit(ctx){
    listenerData.setValue(ctx, listenerData.getValue(ctx.literal())); 
  }
  exitId1(ctx){
    listenerData.setValue(ctx, ctx.getText().split(","));
  }
  exitInteiro(ctx){
    listenerData.setValue(ctx, parseInt(ctx.getText()));
  }
  /* --------------------------------------------------------------
  *
  *                     Atribuição
  *
  * ---------------------------------------------------------------
  */
  exitValor_simples(ctx){
    var id = listenerData.getValue(ctx.id1());
    var valor = listenerData.getValue(ctx.expr());
    listenerData.setValue(ctx, new potigol.ValorSimples(id,valor));
  }
  
  exitDecl_var_simples(ctx){
    var ids = listenerData.getValue(ctx.id1());
    var valor = listenerData.getValue(ctx.expr());
    listenerData.setValue(ctx, new potigol.DeclVariavel(ids,valor));
  }
  
  /* --------------------------------------------------------------
  *
  *                     Blocos secundarios
  *
  * ---------------------------------------------------------------
  */
  exitComparacao(ctx){
    // > >= <= .....
  }
  exitEscreva(ctx){
    var exp = ctx.expr();
    listenerData.setValue(ctx, new potigol.Escreva(exp));
  }
  exitImprima(ctx){
    var exp = ctx.expr();
    // TODO: ao implementar terminal no front, não quebrar a linha quando utilizado imprima.
    listenerData.setValue(ctx, new potigol.Imprima(exp));
  }
}

exports.Loader = Loader;
