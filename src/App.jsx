import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import SavedQuotes from "./components/SavedQuotes";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote(response.data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote(); // Fetch a random quote when the component mounts
  }, []);

  const saveQuote = () => {
    // Check if the quote is already saved
    const isQuoteSaved = savedQuotes.some((savedQuote) => savedQuote === quote);
    if (isQuoteSaved && quote) {
      alert("Already added to saved quotes try getting a new quote");
    }
    if (!isQuoteSaved && quote) {
      setSavedQuotes([...savedQuotes, quote]);
      console.log("Quote saved:", quote);
    } else if (isQuoteSaved) {
      console.log("Quote already saved:", quote);
    }
  };

  return (
    <div>
      <h1 className="heading">Random Quotes</h1>
      <button className="button" onClick={fetchRandomQuote}>
        Get Random Quote
      </button>
      {quote && <QuoteCard quote={quote} saveQuote={saveQuote} />}{" "}
      {/* Display the QuoteCard if quote is available */}
      <SavedQuotes savedQuotes={savedQuotes} />{" "}
      {/* Pass savedQuotes to the SavedQuotes component */}
    </div>
  );
};

export default App;
