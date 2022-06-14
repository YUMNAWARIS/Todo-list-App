export class Todo{
    content:string;
    hasCompleted:boolean;
    constructor(content:string){
        this.content = content;
        this.hasCompleted = false;
    }
}