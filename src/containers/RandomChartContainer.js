import React from 'react'
import { connect } from 'react-redux'
import { getRandomNumbers} from '../actions'
import RandomChart from './RandomChart';

const mapStateToProps = (state) => ({
  allNumbers:state.numbers,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
    submitChartRequest: (term) => { dispatch(getRandomNumbers(term))}
})

export default (connect(mapStateToProps, mapDispatchToProps)(RandomChart));
