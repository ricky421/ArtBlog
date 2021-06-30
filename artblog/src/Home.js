/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [count, setCount] = useState(1);
    //Random viewing
    const event = () => {
        let r = Math.ceil(Math.random()*(blogs.length-2));
        setCount(r);
    }

    //Use this to set current blogs.
    useEffect(() => {
        console.log("Re-rendered.");
        fetch('http://localhost:8000/data')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data.blogs);
            setBlogs(data.blogs);
        });
    }, []);

    //Deleting drawings
    const handleDelete = (id) => {
        alert("Deleting blog number " + id);
        const newBlogs = [];
        let flag = false;
        for(const x of blogs){
            if(flag){
                x.id -= 1;
            }
            if(x.id === id && !flag){
                flag = true;
                continue;
            }
            newBlogs.push(x);
        }
        setBlogs(newBlogs);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage - Drawings</h2>
            <button onClick={event}>Click here to view random drawings.</button>
            <br />
            <p>Drawings displayed: {count} - {count+2}</p>
            {blogs && <BlogList blogs={blogs.filter( (blog) => (blog.id>=count && blog.id<(count+3)) )} handleDelete={handleDelete} />}
        </div>
     );
}
 
export default Home;