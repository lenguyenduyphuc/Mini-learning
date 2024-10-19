
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super()
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
    
      //event handling when clicking likes and dislikes
      handleLike: () => {
        this.setState((prevLike) => ({
          likes: prevLike.likes + 1,
          totalRatings: prevLike.totalRatings + 1
        }))
      },
      handleDislike: () => {
        this.setState((prevDislike) => ({
          dislikes: prevDislike.dislikes + 1,
          totalRatings: prevDislike.totalRatings + 1
        }))
      }
    };
  }
  render() {
    return (
     <>
     <div className = "content-rating">
      <p>
        Something that you can like
      </p>
      <div onClick={this.state.handleLike} className = "rating-buttons">
        <button className = "Like-buttons">
          Like ({this.state.likes})
        </button>
        <button onClick={this.state.handleDislike}className = "Dislike-button">
          Dislike ({this.state.dislikes})
        </button>
        <div>Total : {this.state.totalRatings}</div>
      </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
