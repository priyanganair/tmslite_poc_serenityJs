import { PerformsTasks, Task } from "serenity-js/lib/screenplay-protractor";
export declare class Login implements Task {
    username: string;
    password: string;
    static toApplication(username: string, password: string): Login;
    performAs(actor: PerformsTasks): PromiseLike<void>;
    /**
    * Constructor call for the class
    */
    constructor(username: string, password: string);
}
