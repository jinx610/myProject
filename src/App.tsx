import { useState } from 'react'
import './App.css'
import { sendChat } from './api';

function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const ask = async () => {
    try {
      const data = await sendChat(question);
      setAnswer(data.answer);
    } catch (error) {
      console.error('出错了', error);
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ChatGPT Demo</h1>
      <textarea
        rows={4}
        cols={60}
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <br />
      <button onClick={ask}>发送</button>
      <p><strong>回答：</strong> {answer}</p>
    </div>
  )
}

export default App
