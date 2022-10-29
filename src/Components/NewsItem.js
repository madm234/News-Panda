import { Component } from 'react'

export default class NewsItem extends Component {

  
  render() {
    let {title,desc,image,url} =this.props;
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
          <img src={!image?"https://st2.depositphotos.com/1779253/5637/i/950/depositphotos_56378563-stock-photo-say-no-hand-isolated-on.jpg":image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} >
            <button className='btn btn-sm btn-outline-danger'>Read more</button>
            </a>
           
          </div>
        </div>
      </>
    )
  }
}
