import React, { Component } from 'react';
import ArticleBox from '../articlebox/articlebox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class ArticleList extends Component {

render() {
  var ArticleBoxes = this.props.articles
  .map((article) =>
    <ArticleBox 
      title = {article.headline.main}
      imageUrl = {article.multimedia[0]}
      summary = {article.snippet}
      url = {article.web_url}
      key = {article._id}
    />
  )

  return (
      <Container>
        <Row>
          {ArticleBoxes}
        </Row>
      </Container>
  )
}
}

export default ArticleList;
