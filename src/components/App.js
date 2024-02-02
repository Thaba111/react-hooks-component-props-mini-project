import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header blogName={name} />
      <About logoSrc={image} aboutText={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;