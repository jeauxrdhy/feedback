import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeebackContext'


function FeedbackList({handleDelete}) {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0)
    {
        return <p>no feedback yet</p>
    }

    return (
        <div className='feeback-list'>
            <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                </motion.div>
                
            ))}
            </AnimatePresence>
        </div>
      )
  
//     return (
//     <div className='feeback-list'>
//         {feedback.map((item)=>(
//             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//         ))}
//     </div>
//   )
}


export default FeedbackList