import { BudgetsController } from "./Controllers/BudgetsController.js";
import { SourcesController } from "./Controllers/SourcesController.js";


class App {
  // valuesController = new ValuesController();
  budgetsController = new BudgetsController()
  sourcesController = new SourcesController()
}

window["app"] = new App();
