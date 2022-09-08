import { appState } from "../AppState.js";
import { budgetsService } from "../Services/BudgetsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.BudgetTemplate)
  setHTML('budgets', template)
}
export class BudgetsController {
  constructor() {
    appState.on('budgets', drawBudgets)
    appState.on('sources', drawBudgets)
  }

  addBudget() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      form.reset()
      budgetsService.addBudget(formData)
      console.log('Hello World!');
    } catch (error) {
      console.error('addBudget', error)
    }
  }
}