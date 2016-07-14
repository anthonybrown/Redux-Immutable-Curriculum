import React, { PropTypes } from 'react'
import { decisionContainer, title, decisionFooter, icon, header } from './styles.css'
import { formatTimestamp } from 'helpers/utils'
import { Spinner } from 'components'

Results.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  decisions: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
}

export default function Results (props) {
  if (props.isFetching === true) {
    return <Spinner />
  }

  return (
    <div>
      <h2 className={header}>Decisions</h2>
      {props.decisions.length === 0
        ? <div style={{textAlign: 'center'}}>No Results</div>
        : null}
      {props.error ? <div>{props.error} </div> : null}
      {props.decisions.map((decision) => {
        const id = decision.decisionId
        return (
         <div
          className={decisionContainer}
          key={id}>
            <div>
              <div className={title}>{decision.title}</div>
              <div>
                <span>{formatTimestamp(decision.timestamp)} by {decision.author.name}</span>
              </div>
            </div>
         </div>
        )
      })}
    </div>
  )
}
