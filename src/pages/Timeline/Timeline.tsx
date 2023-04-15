import { FormEvent, KeyboardEvent, useState } from "react"
import Header from "../../layout/Header/Header"
import Separator from "../../layout/Separator/Separator"
import Tweet from "../../components/Tweet/Tweet"
import './Timeline.css'

function Timeline() {
    const [newTweet, setNewTweet] = useState('')
    const [tweets, setTweets] = useState([
      'Meu primeiro tweet',
      'Teste',
      'Deu certo tweetar!'
    ])
  
    function createNewTweet(event: FormEvent) {
      event.preventDefault()
  
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  
    function handleHotkeySubmit(event: KeyboardEvent) {
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        setTweets([newTweet, ...tweets])
        setNewTweet('')
      }
    }
  
    return (
      <main className="timeline">
        <Header title="Home" />
  
        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/angelresende.png" alt="Angélica Resende" />
            <textarea 
              id="tweet" 
              placeholder="What's happening?" 
              value={newTweet}
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value)
              }}
            />
          </label>
  
          <button type="submit">Tweet</button>
        </form>
  
        <Separator />
  
        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })}
      </main>
    )
}

export default Timeline