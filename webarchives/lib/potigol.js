class DeclVariavel{
  constructor(ids, valor){
  }
  execute(){
    ids.forEach(function(entry) {
      listenerData.setAmbiente(entry, valor);
    });
  }
}
exports.DeclVariavel = DeclVariavel;

class Escreva{
  constructor(exp){
    this.texto = exp.getText().replace(/"/g, ' ');
  }
  execute(){
    listenerUtils.show(this.texto);
  }
}
exports.Escreva = Escreva;

class Se{
  constructor(){

  }
  execute(){

  }
}
exports.Se = Se;
