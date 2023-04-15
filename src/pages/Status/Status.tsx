import { PaperPlaneRight } from '@phosphor-icons/react';
import { FormEvent, KeyboardEvent, useState } from "react";
import Header from "../../layout/Header/Header"
import Separator from "../../layout/Separator/Separator"
import Tweet from "../../components/Tweet/Tweet"

import './Status.css';

function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
      'Concordo...',
      'Olha, faz sentido!',
      'Parabéns pelo progresso.'
    ])
  
    function createNewAnswer(event: FormEvent) {
      event.preventDefault()
  
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  
    function handleHotkeySubmit(event: KeyboardEvent) {
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
      }
    }
  
    return (
      <main className="status">
        <Header title="Tweet" />
  
        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia autem libero, veritatis mollitia qui nisi eveniet cumque rerum atque, unde nobis, consectetur illo assumenda. Amet totam consequuntur repudiandae cum?" />
  
        <Separator />
  
        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/angelresende.png" alt="Angélica Resende" />
            <textarea 
              id="tweet" 
              placeholder="Tweet your answer" 
              value={newAnswer}
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
            />
          </label>
  
          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>
  
        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
      </main>
    )
}

export default Status