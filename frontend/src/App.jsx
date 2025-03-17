import React, { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'
import Editor from "react-simple-code-editor"
import axios from 'axios'
import "./App.css"
import Markdown from 'react-markdown'


const App = () => {

  const [code, setCode] = useState(`function sum(){
    return 1+1
     
    }`)

    const [loading,setLoading]=useState(false)
  const [review, setReview] = useState(``)

  async function reviewCode() {
    try {
      setLoading(true)
      let response = await axios.post('https://backend-steel-one-77.vercel.app/ai/get-review', { code })
      setReview(response?.data)
      setLoading(false)
    }
    catch (err) {
      console.log('Error while hitting api', err)
    }
  }

  useEffect(() => {
    prism.highlightAll()
  }, [])
  return (
    <main>

      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code","Fira Mono",monospace',
              fontSize: 12,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <div
          onClick={reviewCode}
          className="button-review">Review</div>

      </div>

      <div className="right">
        {
          loading ?
          <p>Loading...</p>
          :
          <Markdown >
          {review}
        </Markdown>
        }
      </div>
    </main>
  )
}



export default App