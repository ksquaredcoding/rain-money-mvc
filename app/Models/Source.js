import { generateId } from "../Utils/generateId.js"

export class Source {
  /**
   * @param {{source: string, income: number, budgetId: string, id?: string}} data
   */
  constructor(data) {
    console.log('creating source', data);
    this.source = data.source
    this.income = data.income
    this.budgetId = data.budgetId
    this.id = generateId()
  }

  get Template() {
    return /*html*/`
    <li class="d-flex justify-content-between">${this.source}<span class="text-end">$${this.income} 
    <i class="bi bi-trash selectable text-danger" onclick="app.sourcesController.removeSource('${this.id}')"></i></span></li>
    `
  }
}