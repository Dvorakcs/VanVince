class videoCanal {
    #width;
    #height;
    #tipo;
    #x;
    #y;
    #timepoInicio = 0 * 5;
    #timepoFim = 40 * 5;

    constructor(x, y, width, height, tipo) {
        this.#width = width;
        this.#height = height;
        this.#tipo = tipo;
        this.#x = x;
        this.#y = y;
    }

    update(props) {
        // Calcula os limites reais do bloco
        const blocoInicio = this.#x + this.#timepoInicio;
        const blocoFim = this.#x + this.#timepoFim;

        // Colisão do mouse com o bloco
        if (
            props.mouse.left &&
            props.mouse.x > blocoInicio &&
            props.mouse.x < blocoFim &&
            props.mouse.y > this.#y &&
            props.mouse.y < this.#y + this.#height
        ) {
            const centro = (blocoInicio + blocoFim) / 2;
            if (props.mouse.x > centro) {
                this.#x += 5; // direita
            } else if (props.mouse.x < centro) {
                this.#x -= 5; // esquerda
            }
            // Não altere timepoInicio/timepoFim aqui para evitar bugs
        }
    }

    draw(props) {
        const contexto = props.contexto;
        const blocoInicio = this.#x + this.#timepoInicio - (props.offset || 0);
        const blocoFim = this.#x + this.#timepoFim - (props.offset || 0);
        const largura = blocoFim - blocoInicio + props.zoom;

        contexto.fillStyle = '#9414dfff';
        contexto.fillRect(blocoInicio, this.#y, largura, this.#height);

        contexto.strokeStyle = '#440557ff';
        contexto.strokeRect(blocoInicio, this.#y, largura, this.#height);
    }
}