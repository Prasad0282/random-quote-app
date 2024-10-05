import React from "react";

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button className="button" onClick={saveQuote}>
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;
