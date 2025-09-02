import { useEffect } from "react";
import PropTypes from "prop-types";
import "./FeedbackBar.css";

function FeedbackBar({ message, clearMessage }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      clearMessage();
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, clearMessage]);

  if (!message) return null;

  return <div className="feedback-bar">{message}</div>;
}

FeedbackBar.propTypes = {
  message: PropTypes.string,
  clearMessage: PropTypes.func.isRequired,
};

export default FeedbackBar;
