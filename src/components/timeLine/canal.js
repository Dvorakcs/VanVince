class canal{
    #props = [];
    #height = 0;
    #width = 0
    #x = 0;
    #y = 0;
    #tipo = 'video';
    constructor(x,y,width, height,tipo){
        this.#width = width;
        this.#height = height;
        this.#tipo = tipo;
        this.#x = x;
        this.#y = y;
        this.inicializarProps();
    }

    inicializarProps(){
        this.#props.push(new canalProps(this.#x,this.#y,155,this.#height ,this.#tipo));
    }
    draw(contexto){

        contexto.fillStyle = '#333333ff';
        contexto.fillRect(this.#x, this.#y, this.#width, this.#height);
        contexto.strokeStyle = '#919191ff';
        contexto.strokeRect(this.#x, this.#y, this.#width, this.#height);
        this.#props.forEach(prop => {
            prop.draw(contexto);
        })
    }
}