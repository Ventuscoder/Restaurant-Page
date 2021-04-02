class Content {
    constructor(name, func) {
        this.name = name;
        this.func = func;
    }
    onClick() {
        return this.func;
    }
}