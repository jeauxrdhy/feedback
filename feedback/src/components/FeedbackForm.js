import React from 'react'
import Card from '../shared/Card'
import RatingSelect from './RatingSelect'
import {useState} from 'react'

function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '')
        {
            setbtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10)
        {
            setMessage('text must be more than 10 characters')
            setbtnDisabled(true)
        }
        else
        {
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10)
        {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className='input-group'>
                <input type="text" onChange={handleTextChange} placeholder='Write a review' value={text} />
                <button type='submit' disabled={btnDisabled} >Send</button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm