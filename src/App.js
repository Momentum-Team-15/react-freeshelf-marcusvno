import './App.css';
import { useState } from 'react';

function App({bookData}) {
  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={`https://reddit.com${post.permalink}`}>
            {post.title}</a> - {post.author} - +{post.ups}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
