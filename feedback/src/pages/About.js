import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'

function About() {
  return (
    <Card>
        <div className='about'>
        <h2>About This Project</h2>
        <p>This is a React app to leave feedback
        for product or services</p>

        <p>
        <Link to='/'>Back Home</Link>
        </p>
        </div>
    </Card>
  )
}

export default About