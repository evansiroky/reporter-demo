import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Reporter from "./containers/Reporter"
import store from "./store"

ReactDOM.render(<Provider store={store}>
  <Reporter/>
</Provider>, document.getElementById('app'))
