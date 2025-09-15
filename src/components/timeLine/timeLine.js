class timeLine{
    #width = 800;
    #height = 200;
    #canais = [];
    constructor(width, height){
      this.#width = width;
      this.#height = height;
      this.#canais.push(new canal(this.#width, this.#height));
    }
   
    update(){
       
    }

    draw(contexto){
        contexto.clearRect(0, 0, this.#width, this.#height);
        contexto.fillStyle = '#575650';
        contexto.fillRect(0, 0, this.#width, this.#height);
        this.#canais.forEach(canal => {
          canal.draw(contexto);
        });
    }
}