class  canalProps {
    #width = 0;
    #height = 0
    #tipo = null;
    #x = 0;
    #y = 0;
    #buttons = [];
    constructor(x,y,width,height,tipo) {
        this
        this.#width = width;
        this.#height = height;
        this.#tipo = tipo;
        this.#x = x;
        this.#y = y;
        this.#buttons.push(new botao(this.#x +40, this.#y+this.#height/2-12.50, 50, 25, 'Lock'));
        this.#buttons.push(new botao(this.#x +95, this.#y+this.#height/2-12.50, 50, 25, 'Show'));
    }

    update() {

    }
    draw(contexto) {
        contexto.fillStyle = '#3b3b39ff';
        contexto.fillRect(this.#x, this.#y, this.#width, this.#height);
        contexto.strokeStyle = '#919191ff';
        contexto.strokeRect(this.#x, this.#y, this.#width, this.#height);
        contexto.fillStyle = '#131212ff';
        contexto.fillText(this.#tipo, this.#x + this.#width/2 - 55, this.#y + this.#height/2);

        this.#buttons.forEach(button => {
            button.draw(contexto);
        });
    }
}