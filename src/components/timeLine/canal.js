class canal{
    #props = [];
    constructor(width, height,tipo){
        this.width = width;
        this.height = height;
        this.tipo = tipo;
        this.inicializarProps();
    }

    inicializarProps(){
        this.#props.push(new canalProps(0,0,150,150,'video'));
    }
    draw(contexto){
        this.#props.forEach(prop => {
            prop.draw(contexto);
        })
    }
}