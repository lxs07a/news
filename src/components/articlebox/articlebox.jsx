import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'
import './articlebox.css';

class ArticleBox extends Component {

  //set a default image, set no-show for modal 
  state = {
    imageUrl: "https://s3-us-west-1.amazonaws.com/devlyuda/update.jpeg",
    show: false
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  // check if NY API returned a valid image url, use it instead of default 
  componentDidMount () {
    if (this.props.imageUrl !== undefined){
      const imagePath = "https://static01.nyt.com/" + this.props.imageUrl.url 
      this.setState({imageUrl: imagePath})
    } 
  }

  render () {

    const styling = {
      background: `transparent url(${this.state.imageUrl}) no-repeat center center /cover`
    }

    return (
      <>
        <Col lg={3} md={4} sm={6} xs={12} className="article-box"
          onClick={this.handleShow}
          style={styling}>
          <div className="headline">
            <h5>{this.props.title}</h5>
          </div>
        </Col>
        
        {/* when the aricle box is clicked, show a pop-up with summary and link */}
        <Modal show={this.state.show} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.summary}</Modal.Body>
          <Modal.Footer>
            <a href={this.props.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={this.handleHide}>
              Read it on New York Times
            </a>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
export default ArticleBox