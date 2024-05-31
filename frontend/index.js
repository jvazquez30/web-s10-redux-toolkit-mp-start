import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { store } from './state/store'
import { Provider } from 'react-redux'


const domNode = document.getElementById('root')
const root = createRoot(domNode)

// ✨ wrap <App /> with a provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
