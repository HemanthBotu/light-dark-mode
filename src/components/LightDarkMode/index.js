import Component from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  render() {
    const {isLightMode} = this.state
    let appButton
    if (isLightMode) {
      appButton = (
        <button className="button" type="button">
          Dark Mode
        </button>
      )
    } else {
      appButton = (
        <button className="button" type="button">
          Light Mode
        </button>
      )
    }
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="headig">Click To Change Mode</h1>
          {appButton}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
