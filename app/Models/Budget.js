import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Budget {
  /**
   * @param {{name: string, price: number, type: string, purchased: boolean, id?: string}} data
   */
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.purchased = data.purchased
    this.type = data.type
    this.id = generateId()
  }

  get BudgetTemplate() {
    return /*html*/ `
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <input type="checkbox">
                <p><span></span>${this.name}</p>
              </div>
              <div>
                <p><span>$${this.SourceTotal}</span> out of <span><strong>$${this.price}</strong></span></p>
              </div>
            </div>
            <div>
              <div>
                <ul class="card">
                  ${this.SourceTemplates}
                </ul>
              </div>
              <form onsubmit="app.sourcesController.createSource('${this.id}')">
                <p><strong>add source</strong></p>
                <div class="form-floating mb-3 d-flex">
                  <input type="text" class="form-control" name="source">
                  <label for="source"></label>
                  <input type="number" class="form-control" name="income" style="width: 10vw;">
                  <label for="income"></label>
                  <button class="btn btn-primary" type="submit">Add</button>
                </div>
              </form>
            </div>
    `
  }

  get SourceTemplates() {
    let template = ''
    this.Sources.forEach(s => template += s.Template)
    return template
  }

  get Sources() {
    let sources = appState.sources.filter(s => s.budgetId == this.id)
    return sources
  }

  get SourceTotal() {
    let total = 0
    this.Sources.forEach(s => total += s.income)
    return total
  }
}