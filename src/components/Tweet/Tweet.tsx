import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import './Tweet.css';

interface ITweetProps {
  content: string
}

function Tweet(props: ITweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/angelresende.png" alt="Angélica Resende" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Angélica Resende</strong>
          <span>@angelresende007</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Tweet