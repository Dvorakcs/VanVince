class elemento{
    
    constructor() {
        
        
    }
    addElementoBody(elemento){
        const root = document.getElementById('root');  
        console.log(root);
        root.append(elemento);
    }
}