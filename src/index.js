import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

function Freeshelf() {
    const [posts, setPosts] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(`https://www.reddit.com/r/roguelikedev.json`)
        .then(res => {
          const newPosts = res.data.data.children.map(obj => obj.data);
          setPosts(newPosts);
        });
    }, []);
  
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}><a href={`https://reddit.com${post.permalink}`}>
              {post.title}</a> - {post.author} - +{post.ups}</li>
          ))}
        </ul>
      </div>
    );
  }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Freeshelf />
    </React.StrictMode>
  );
  







/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
