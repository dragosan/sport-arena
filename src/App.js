import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import "./App.css"
import Home from "./components/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Article from "./components/Article"

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(false)
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      setIsLoading(true)
      setData(data)
    }
    fetchData()
  }, [isLoading])
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home data={data} isLoading={isLoading} />}
        ></Route>
        <Route
          exact
          path="/article/:title"
          element={<Article data={data} />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
