class  canalProps {
    #width = 0;
    #height = 0
    #tipo = null;
    #x = 0;
    #y = 0;
    constructor(x,y,width,height,tipo) {
        this
        this.#width = width;
        this.#height = height;
        this.#tipo = tipo;
        this.#x = x;
        this.#y = y;
        
    }

    update() {

    }
    draw(contexto) {
        contexto.fillStyle = '#3b3b39ff';
        contexto.fillRect(this.#x, this.#y, this.#width, this.#height);
         contexto.fillStyle = '#070707ff';
        contexto.fillText(this.#tipo, this.#x + 10, this.#y + 45);
    }
}