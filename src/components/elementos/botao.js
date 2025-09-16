class botao{
    #width = 0;
    #height = 0;
    #x = 0
    #y = 0;
    #nome = '';
    constructor(x,y,width,height,name){
        this.#nome = name;
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
    }


   draw(contexto) {
        // Desenha o botão
        contexto.fillStyle = '#444444ff';
        contexto.fillRect(this.#x, this.#y, this.#width, this.#height);

        // Configura o estilo do texto
        contexto.fillStyle = '#c7c5c5ff';
        contexto.font = '12px Arial'; // Define o tamanho e a fonte do texto
        contexto.textAlign = 'center'; // Centraliza o texto horizontalmente
        contexto.textBaseline = 'middle'; // Centraliza o texto verticalmente

        // Desenha o texto centralizado
        const centerX = this.#x + this.#width / 2; // Coordenada X do centro do botão
        const centerY = this.#y + this.#height / 2; // Coordenada Y do centro do botão
        contexto.fillText(this.#nome, centerX, centerY);
    }
    update(){

    }
}