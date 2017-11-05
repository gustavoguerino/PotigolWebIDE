/*
 *
 * Configurando editor ACE
 *
 */
var editor = ace.edit('editor');
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode('ace/mode/mode-potigol');

/*
 *
 * Configurando ANTRL4 para executar o codigo
 *
 */
document.getElementById("executar").addEventListener("click", function(){
listenerData.cleanData();
const {
    FileStream,
    CommonTokenStream,
  } = require('antlr4/index');

  const {potigolLexer} = antlr4_require('./parser/potigolLexer');
  const {potigolParser} = antlr4_require('./parser/potigolParser');
  const {Loader} = antlr4_require('./lib/loader');

  const chars = new antlr4.InputStream(editor.getValue());
  const lexer = new potigolLexer(chars);
  const tokens  = new CommonTokenStream(lexer);
  const parser = new potigolParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.prog();

  const loader = new Loader();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(loader, tree);
});
