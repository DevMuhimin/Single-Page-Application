import { Link } from "react-router-dom";
import { getSlug } from "../helpers/helpers";

const BlogItem = ({ item }) => {
    return (
        <>
            <div className="row p-3 mb-4">
                <div className="col-md-3">
                    <img className='w-100'src ={item.photo} alt="" />
                </div>
                <div className="col-md-9">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <Link to={`/blog/${getSlug(item.title)}`} className='btn btn-sm btn-primary'>Read More</Link>
                </div>
            </div>
        </>
    );
}

export default BlogItem;
