import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
