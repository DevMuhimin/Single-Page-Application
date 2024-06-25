
// import { useParams } from 'react-router-dom';
import BlogItem from '../components/BlogItem';
import Header from '../components/Header';
import { blogs } from '../faker/data';

const Blog = () => {
  // const { slug } = useParams();
  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Our Blog</h1>
          </div>
        </div>
        {blogs.map((item,index) =>
        {
          return <BlogItem item = {item} key={index}/>
        })}
      </div>
    </>
  )
}

export default Blog;
