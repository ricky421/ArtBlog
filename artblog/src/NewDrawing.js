import { useState } from 'react';

const Create = () => {
    var [title, setTitle] = useState('');
    var [link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, link};
        console.log(blog);

        fetch('http://localhost:8000/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('New drawing added.');
        });
    }

    return ( 
        <div className="create">
            <h3>Create new entry</h3>
            <form onSubmit={handleSubmit}>
                <label>Drawing Name:</label>
                <input type="text" name="title" 
                value={title} onChange={(e) => setTitle(e.target.value)}
                required />
                <br/>
                <br/>
                <label>Link:</label>
                <input type="text" name="link"
                 value={link} onChange={(e) => setLink(e.target.value)}
                 required />
                 <br/>
                 <br/>
                 <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Create;