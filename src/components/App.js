import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
    const [preview, setPreview] = useState("");
    const [quote, setQuote] = useState("");
    const onBtnClick = (key) => {
        setPreview(`${preview}${key}`);
        if (`${preview}${key}` === "forty two") {
            fetch("https://api.quotable.io/random")
                .then((res) => res.json())
                .then((data) => setQuote(data.content));
        }
    };

    return (
        <div className="keyboard">
            {quote === "" ? (
                <>
                    <div className="preview">{preview}</div>
                    <div>
                        {keys.map((key) => (
                            <button
                                key={key}
                                id={key === " " ? `key-space` : `key-${key}`}
                                onClick={() => onBtnClick(key)}
                            >
                                {key === " " ? "Space" : key.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="quote">{quote}</div>
            )}
        </div>
    );
};

export default App;
