import React, { Component} from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {
   static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'

   }
   static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
   }
    constructor(){
        super()
        console.log("hello iam a constructor fron the news componenent")
        this.state={
            articles:[],
            loading:true,
            page:1
        }
    }
    async updateNews(){
      this.props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ab2d09ac7fb4705a26f0811ade8438a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState({
      // page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
    })
    this.props.setProgress(100)
    }
    async componentDidMount(){
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ab2d09ac7fb4705a26f0811ade8438a&page=1&pageSize=${this.props.pageSize}`
      // this.setState({loading:true})
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
      this.updateNews()
    }
 handlePrevClick =async ()=>{
  //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ab2d09ac7fb4705a26f0811ade8438a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //  this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState({
  //     page:this.state.page-1,
  //     articles:parsedData.articles,
  //     loading:false
  //   })
  this.setState({page:this.state.page-1})
  this.updateNews()
   
  }
  handleNextClick=async ()=>{
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ab2d09ac7fb4705a26f0811ade8438a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
// this.setState({loading:true})
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     this.setState({
//       page:this.state.page+1,
//       articles:parsedData.articles,
//       loading:false
//     })
this.setState({page:this.state.page+1})
this.updateNews()
  }
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2 className='text-center m-y-4'>Newsman- Top headline</h2>
           {this.state.loading && <Spinner/> } 
            <div className="row">
           {!this.state.loading && this.state.articles.map((element)=>{
return         <div className="col-md-4">
<NewsItem key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
</div>
                })}
       
       
        </div>
      <div className="container d-flex justify-content-between">
<button disabled={this.state.page<=1}type='button' className='btn btn-dark'onClick={this.handlePrevClick}>&larr;Previous</button>
<button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type='button'className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
        </div>
      </div>
    )
  }
}

export default News