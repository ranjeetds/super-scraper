import { useState } from 'react';

const Form = ({ endpoint, onResult }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        const result = await response.json();
        onResult(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter URL:
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

