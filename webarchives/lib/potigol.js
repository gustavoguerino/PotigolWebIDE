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


class Se{
  constructor(condicoes, comandos, senao){
    this.comandos = comandos;
    this.senao = senao;
    this.condicoes = condicoes;
  }
  execute(){
    console.log("ola");
    listenerUtils.show("funcionou");
  }
}
exports.Se = Se;

class Escreva{
  constructor(exp){
    this.texto = exp.getText().replace(/"/g, '');
  }
  execute(){
    listenerUtils.show(this.texto);
  }
}
exports.Escreva = Escreva;

class Imprima{
  constructor(exp){
    this.texto = exp.getText().replace(/"/g, '');
  }
  execute(){
    listenerUtils.show(this.texto);
  }
}
exports.Imprima = Imprima;