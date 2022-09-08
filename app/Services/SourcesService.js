import { appState } from "../AppState.js"
import { Source } from "../Models/Source.js"
import { saveState } from "../Utils/Store.js"

class SourcesServices {
  createSource(formData) {
    let source = new Source(formData)
    appState.sources = [source, ...appState.sources]
    saveState('sources', appState.sources)
  }

  removeSource(id) {
    appState.sources = appState.sources.filter(source => source.id !== id)
    saveState('sources', appState.sources)
  }
}

export const sourcesServices = new SourcesServices()