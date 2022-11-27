import { useState, useEffect } from 'react';
import axios from 'axios';

const GetRequest = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/posts/1')
         .then((response) => {
            setPosts(response.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </div>
   );
};

export default GetRequest;