import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {useState} from 'react'
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeebackContext'


function App(){
    const [feedback,setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        {
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }


    return(
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats />
                    <FeedbackList handleDelete={deleteFeedback}/>
                    </>
                }> 
                </Route>
                <Route path='about' element={<About/>}/>
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App