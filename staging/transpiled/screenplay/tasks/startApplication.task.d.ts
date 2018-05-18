import { PerformsTasks, Task } from "serenity-js/lib/screenplay-protractor";
export declare class Start implements Task {
    static openApplication(): Start;
    performAs(actor: PerformsTasks): PromiseLike<void>;
}
