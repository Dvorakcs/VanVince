class timeLine{
    #elemento = new elemento();
    #canvas = null;
    #width = 800;
    #height = 200;
    constructor(width, height){
      this.#width = width;
      this.#height = height;
      this.render();
    }

    render(){
        const _canvas = window.document.createElement('canvas');
        _canvas.width = this.#width;
        _canvas.height = this.#height;
        _canvas.style.border = '1px solid black';
        this.#elemento.addElementoBody(_canvas);
        const contexto = new canvas(this.#canvas).getContexto();
        contexto.fillStyle = 'lightgray';
        contexto.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        
    }
}