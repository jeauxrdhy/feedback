import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0)
    {
        return <p>no feedback yet</p>
    }
  
    return (
    <div className='feeback-list'>
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

FeedbackList.PropTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList