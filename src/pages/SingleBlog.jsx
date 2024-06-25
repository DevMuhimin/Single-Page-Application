import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { blogs } from "../faker/data";

const SingleBlog = () => {
  const {slug} = useParams();
  const singlePost = blogs.find((data)=>data.slug == slug);
  return (
    <>
      <Header/>
      {singlePost ? (
        <div className="container">
        <div className="row">
          <div className="col my-4">
            <h1>{singlePost.title}</h1>
            <img className="w-100" src={singlePost.photo} alt="" />
            <p>{singlePost.content}</p>
          </div>
        </div>
      </div>
      ):(
        <h1>Post Not Found</h1>
      )} 
    </>
  )
}

export default SingleBlog;
