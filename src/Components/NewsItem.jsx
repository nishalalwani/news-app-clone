import React, { Component } from 'react'

export class NewsItem extends Component {
  
   
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
    
      <div>
        <div className="my-3">
    <div className="card">
  <img src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"}className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger'style={{left:'88%',zIndex:'1'}}>
      {source}</span>
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}  target="_blank"className="btn btn-primary">Read More</a>
  </div>
</div>
</div>
      </div>
    )
  }
}

export default NewsItem