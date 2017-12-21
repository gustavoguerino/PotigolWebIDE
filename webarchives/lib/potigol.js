class ValorSimples{
  constructor(id, valor){
    this.id = id;
    this.valor = valor;
  }
  execute(){
    listenerData.setAmbiente(this.id, this.valor);
  }
}
exports.ValorSimples = ValorSimples;
class DeclVariavel{
  constructor(ids, valor){
    this.ids = ids;
    this.valor = valor;
  }
  execute(){
    this.ids.forEach(function(entry, valor = this.valor) {
      listenerData.setAmbiente(entry, valor);
    });
  }
}
exports.DeclVariavel = DeclVariavel;




class Escreva{
  constructor(exp){
    console.log()
    this.texto = exp.getText().replace(/"/g, '');
  }
  execute(){
    listenerUtils.show(this.texto);
  }
}
exports.Escreva = Escreva;

class Imprima{
  constructor(exp){
    console.log()
    this.texto = exp.getText().replace(/"/g, '');
  }
  execute(){
    listenerUtils.show(this.texto);
  }
}
exports.Imprima = Imprima;


class Se{
  constructor(){

  }
  execute(){

  }
}
exports.Se = Se;
