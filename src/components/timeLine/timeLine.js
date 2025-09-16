class timeLine{
    #width = 0;
    #height = 0;
    #canais = [];
    #reguaTempo = null;
    constructor(width, height){
      this.#width = width;
      this.#height = height;
      this.#canais.push(new canal(0,this.#height/2*this.#canais.length+ 25,this.#width, this.#height/2,'video'));
      this.#canais.push(new canal(0,this.#height/2*this.#canais.length+25,this.#width , this.#height/2,'audio'));
      this.#reguaTempo = new reguaTempo(155,0,this.#width - 155,25);
    }
   
    update(){
      this.#reguaTempo.update(); 
    }

    draw(contexto){
        contexto.clearRect(0, 0, this.#width, this.#height);
         
        contexto.fillStyle = '#575650';
        contexto.fillRect(0, 0, this.#width, this.#height);
        this.#reguaTempo.draw(contexto);
        this.#canais.forEach(canal => {
          canal.draw(contexto);
        });
       
    }
} 