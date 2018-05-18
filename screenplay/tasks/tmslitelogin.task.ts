import { browser } from "protractor";
import { Text, Enter, Click, Switch } from "serenity-js/lib/serenity-protractor";
import { Open, PerformsTasks, step, Task, Wait, Duration, Execute} from "serenity-js/lib/screenplay-protractor";
import { TMSLiteLocators } from "../../screenplay/locators/tmslitelocators";

export class Login implements Task {

  static toApplication(username: string, password: string) {
    return new Login(username, password);
  }

  @step("actor login in to the application")
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
        Click.on(TMSLiteLocators.loginButton),
            Wait.for(Duration.ofSeconds(3)),
            Enter.theValue(this.username).into(TMSLiteLocators.usernameTextbox),
            Enter.theValue(this.password).into(TMSLiteLocators.passwordTextbox),
            Click.on(TMSLiteLocators.signInButton),
            Wait.for(Duration.ofSeconds(7)));
  }
   /**
   * Constructor call for the class
   */
  constructor(public username: string, public password: string) {
}
}
