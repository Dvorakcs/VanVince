class canvas {
    #canvas = null;
    #contexto = null;
    constructor(canvas,size){
        this.#canvas = canvas;
        this.#contexto = canvas.getContext('2d');
        this.#canvas.width = size.width;
        this.#canvas.height = size.height;
    }
    getCanvas(){
        return this.#canvas;
    }
    getContexto(){
        return this.#contexto;
    }
    
}