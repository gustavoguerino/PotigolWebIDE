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
    this.values.set(name,value);
  }
  getAmbiente(name){
    return this.values.get(name);
  }
  cleanData(){
    this.warnings = [];
    this.errors = [];
    this.ambiente = [];
    this.values = new Map();
  }
}

listenerData = new ListenerData();
