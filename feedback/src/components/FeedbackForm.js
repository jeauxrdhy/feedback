import React from 'react'
import Card from '../shared/Card'
import {useState} from 'react'

function FeedbackForm() {
    const [text,setText] = useState('')
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

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
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