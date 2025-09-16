class videoCanal{
    #width;
    #height
    #tipo;
    #x
    #y
    #timepoInicio = 20 * 5;
    #timepoFim = 40 * 5;
    
    constructor(x, y, width, height, tipo){
        this.#width = width;
        this.#height = height;
        this.#tipo = tipo;
        this.#x = x;
        this.#y = y;    
    }
    update(){
       // this.#x += 0.1;
    }
    draw(contexto){
        contexto.fillStyle = '#9414dfff';
        contexto.fillRect(this.#x + this.#timepoInicio, this.#y, this.#timepoInicio - this.#timepoFim, this.#height);
        contexto.strokeStyle = '#440557ff';
        contexto.fillRect(this.#x + this.#timepoInicio, this.#y, this.#timepoInicio - this.#timepoFim, this.#height);
    }
}