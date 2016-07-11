import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Counter } from '../components'
import * as CounterActions from '../actions/CounterActions'

export function App({ counter, actions, children }) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>react-bootstrap4-ghpages</h1>
        <Counter counter={counter} actions={actions} />
        <Link to="/gallery">Gallery</Link>
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
