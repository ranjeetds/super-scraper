import { useState } from 'react';
import Form from '../components/Form';
import 'tailwindcss/tailwind.css';

const Home = () => {
    const [results, setResults] = useState(null);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Super Scraper</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Scrape</h2>
                    <Form endpoint="scrape" onResult={setResults} />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Crawl</h2>
                    <Form endpoint="crawl" onResult={setResults} />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Generate Scraper Code</h2>
                    <Form endpoint="generate_scraper" onResult={setResults} />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">LangChain Task</h2>
                    <Form endpoint="langchain_task" onResult={setResults} />
                </div>
            </div>
            <h2 className="text-2xl font-semibold mt-4">Results</h2>
            <pre className="bg-gray-100 p-4 rounded">{results && JSON.stringify(results, null, 2)}</pre>
        </div>
    );
};

export default Home;

