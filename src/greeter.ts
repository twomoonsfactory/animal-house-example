export class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

export class GreeterHandler {
    greeter: Greeter;
    message: string;
    name: string;
    constructor(){
        this.greeter = new Greeter('world');
        this.message = this.greeter.greet();
    }
    updateMessage(){
        this.greeter = new Greeter(this.name);
        this.message = this.greeter.greet();
    }
}
