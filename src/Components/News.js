import { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   articles= []

  constructor()
  {
    super();
    this.state =
    {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

async componentDidMount()
{
  let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=b567035339934cacb035708749453402";
  let data =await fetch(url);
  let parsedData =await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
}

handeleprevOnClick = async()=>
{
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=b567035339934cacb035708749453402&page=${this.state.page-1}`;
  let data =await fetch(url);
  let parsedData =await data.json();
  console.log(parsedData);
  this.setState(
    {page: this.state.page-1,
    articles: parsedData.articles})
}

handelenextOnClick = async()=>{

  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=b567035339934cacb035708749453402&page=${this.state.page+1}`;
  let data =await fetch(url);
  let parsedData =await data.json();
  console.log(parsedData);
  this.setState(
    {page: this.state.page+1,
    articles: parsedData.articles})
}

  render() {
    return (
         <div className='container my-4 '>
          <h1>Top HeadLines</h1>
          <br />
        <div className='row my-3'>
          {
            this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
               <NewsItem title={element.title} desc={element.description} image={element.urlToImage} url={element.url}/>
               <br />
               </div>
            }
            )
          }
            </div>

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handeleprevOnClick}>Previous</button>
            <button className='btn btn-dark' onClick={this.handelenextOnClick}>Next</button>
          </div>
         </div>   
    )
  }
}
