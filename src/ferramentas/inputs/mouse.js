class mouse {
    #mouse = {x:0, y:0, left:false, middle:false, right:false};
    #canvas;
    constructor(canvas) {
        this.#canvas = canvas;
        addEventListener("mousemove", (e) => {
            const rect = this.#canvas.getBoundingClientRect();
            this.#mouse.x = e.clientX - rect.left;
            this.#mouse.y = e.clientY - rect.top;
        });
        addEventListener("mousedown", (e) => {
            if(e.button === 0) this.#mouse.left = true;
            if(e.button === 1) this.#mouse.middle = true;
            if(e.button === 2) this.#mouse.right = true;
        });
        addEventListener("mouseup", (e) => {
            if(e.button === 0) this.#mouse.left = false;
            if(e.button === 1) this.#mouse.middle = false;
            if(e.button === 2) this.#mouse.right = false;
        });
    }

    getMouse() {
        return this.#mouse;
    }
}