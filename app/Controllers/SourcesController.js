import { getFormData } from "../Utils/FormHandler.js"
import { sourcesServices } from "../Services/SourcesService.js"

export class SourcesController {
  createSource(budgetId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      formData.budgetId = budgetId
      console.log('coup?', formData);
      sourcesServices.createSource(formData)
    } catch (error) {
      console.error('createSource', error)
    }
  }

  removeSource(id) {
    if (window.confirm('Are you sure you want to delete this source?')) {
      sourcesServices.removeSource(id)
    }
  }
}