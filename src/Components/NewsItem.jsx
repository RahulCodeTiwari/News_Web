import image from '../assets/news1.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-3 mx-4 px-2 py-2" style={{maxWidth:"320px"}}>
    <img src={src?src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"This website is created by Rahul Tiwari. He is a final year B.Tech CSE student at University of Lucknow."}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem;