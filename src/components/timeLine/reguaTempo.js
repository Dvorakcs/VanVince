class reguaTempo {
    #height = 0;
    #width = 0;
    #x = 0;
    #y = 0;
    #tempoTotal = 60;
    #pixelsPorSegundo = 5;
    #offset = 0;

    constructor(x, y, width, height) {
        this.#width = width;
        this.#height = height;
        this.#x = x;
        this.#y = y;
        this.#tempoTotal = width;
        window.addEventListener('wheel', (event) => this.scroll(event));
    }

    update() {}

    draw(contexto) {
        contexto.fillStyle = '#777777ff';
        contexto.fillRect(this.#x, this.#y, this.#width, this.#height);

        contexto.fillStyle = '#ffffff';
        contexto.font = '10px Arial';
        contexto.textAlign = 'center';
        contexto.textBaseline = 'top';

        const tempoTotal = this.#tempoTotal / this.#pixelsPorSegundo;
        const step = 10;

        for (let t = 0; t <= tempoTotal; t += step) {
            const posX = this.#x + t * this.#pixelsPorSegundo - this.#offset;

            if (posX >= this.#x && posX <= this.#x + this.#width) {
                contexto.strokeStyle = '#ffffff';
                contexto.beginPath();
                contexto.moveTo(posX, this.#y);
                contexto.lineTo(posX, this.#y + this.#height / 2);
                contexto.stroke();

                contexto.fillText(`${t}s`, posX, this.#y + this.#height / 2 + 2);
            }
        }
    }

    scroll(event) {
        const scrollSpeed = 20;
        this.#offset += event.deltaY > 0 ? scrollSpeed : -scrollSpeed;
        
        if (this.#offset < 0) {
            this.#offset = 0;
        }

        if (typeof this.onScroll === 'function') {
            this.onScroll();
        }
        this.#tempoTotal +=  this.#offset;
    }

    setOnScrollCallback(callback) {
        this.onScroll = callback;
    }
}