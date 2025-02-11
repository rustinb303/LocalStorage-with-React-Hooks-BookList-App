import React, { useState } from 'react';

function AskAI() {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we should send the question to the AI
        console.log('Question submitted', question);
        // Reset the form fields
        setQuestion('');
    };

    return (
        <div className="ask-ai-container">
            <h2>Ask AI</h2>
            <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
                <label>Question</label>
                <input type="text" className="form-control" required onChange={(e) => setQuestion(e.target.value)} value={question} />
                <br />
                <button type="submit" className="btn btn-success btn-md">
                    Ask
                </button>
            </form>
        </div>
    );
}

export default AskAI;
