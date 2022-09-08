import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";
import { saveState } from "../Utils/Store.js";

class BudgetsService {
  addBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    saveState('budgets', appState.budgets)
  }
}

export const budgetsService = new BudgetsService()