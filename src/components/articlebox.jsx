import React, {Component} from 'react';
import logo from '../logo.svg';
// import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import './articlebox.css';

class ArticleBox extends Component {
  state = {
    imageUrl: logo
  }

  componentDidMount () {
    if (this.props.imageUrl !== undefined){
      const imagePath = "https://static01.nyt.com/" + this.props.imageUrl.url 
      this.setState({imageUrl: imagePath})
    } 
  }

  render () {

    return (
        <Col lg={3} md={4} sm={6} xs={12} className="lulu">
          <Media>
            {/* <Link to={'/itempage/'+ this.props.title} title={this.props.title}> */}
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={this.state.imageUrl}
              alt="News thumbnail"
            />
            <Media.Body>
              <h5>{this.props.title}</h5>
              <h5>Read More</h5>
            </Media.Body>
          </Media>
          {/* </Link> */}
        </Col>
    )
  }
}
export default ArticleBox