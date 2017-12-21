class ListenerUtils {
  constructor() {
  }
  show(mensagem){
    terminal.echo(mensagem);
  }
  error(mensagem){
    terminal.error(mensagem);
  }
}
listenerUtils = new ListenerUtils();
