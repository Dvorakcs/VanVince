class canvas {
    #canvas = null;
    #contexto = null;
    constructor(canvas){
        this.#canvas = canvas;
        this.#contexto = canvas.getContext('2d');
    }
    getCanvas(){
        return this.#canvas;
    }
    getContexto(){
        return this.#contexto;
    }
    
}