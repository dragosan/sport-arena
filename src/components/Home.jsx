import React from "react"
import { Link } from "react-router-dom"
import Showcase from "./layout/Showcase"

const Home = ({ data }) => {
  return (
    <>
      <Showcase />
      <section id="home-articles" className="py-2">
        <div className="container">
          <h2>Editor Picks</h2>
          <div className="articles-container">
            {data &&
              data.articles.map((article) => (
                <article className="card">
                  <div className="category category-sports">Sports</div>
                  <h3>
                    {/* <Link to={`/article/${article.title}`}>
                      {article.title}
                    </Link> */}
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </h3>
                  <p>{article.description}</p>
                  <img src={article.urlToImage} alt={article.title} />
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
