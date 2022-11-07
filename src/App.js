import "./App.css";
import React, { useState } from "react";


function App({ bookData }) {
    return (
        <div>
            <h1>Freeshelf</h1>
            {bookData.map((data) => (
                <div className="bookCard">
                    <ul>
                        <li>{data.title}</li>
                        <li>{data.author}</li>
                        <li>{data.shortDescription}</li>
                    </ul>
                        
                </div>
            ))}
            
            
        </div>
    );
}


function expandedInfo({url, publisher, pubDate, detailedDesc}){
    const [expansion, setExpansion] = useState(false);
    

}


export default App;
