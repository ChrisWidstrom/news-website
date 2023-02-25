import React from "react";
import styled from "styled-components";

import { Header } from "../components/Header";
import { Article } from "../components/Article";

export const Home = ({articles}) => {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <SList>
        {articles.map(article => (
          <li key={article.url}>
            <Article 
              source={article.source.name}
              description={article.description}
              title={article.title}
              content={article.content}
            />
          </li>
        ))}
      </SList>

    </>
  );
}

const SList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
