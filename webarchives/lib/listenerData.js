class ListenerData {
  constructor() {
    this.cleanData()
  }
  setValue(node, value){
    this.values.set(node,value);
  }
  getValue(node){
    return this.values.get(node);
  }
  setAmbiente(name, value){
    this.ambiente.set(name,value);
  }
  getAmbiente(name){
    return this.ambiente.get(name);
  }
  cleanData(){
    this.warnings = [];
    this.errors = [];
    this.ambiente = new Map();
    this.values = new Map();
  }
  getAllAmbiente(){
    return this.ambiente;
  }
}

listenerData = new ListenerData();
