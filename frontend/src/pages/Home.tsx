import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

export function Home() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder', { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Wand2 className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">
            AI Website Builder
          </h1>
          <p className="text-lg text-neutral-300">
            Describe your dream website, and we'll help you build it step by step
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-neutral-800 rounded-lg p-6 shadow-[0_0_5px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,0.6),0_0_15px_rgba(59,130,246,0.4)]">
            <div className='relative'>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={`Describe the website you want to create... <Ctrl+Enter to submit>`}
                className="w-full h-36 p-4 rounded-lg shadow-sm resize-none bg-neutral-900 text-neutral-100 border border-neutral-700 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.key === "Enter") {
                    e.preventDefault();
                    if (prompt.trim()) {
                      handleSubmit(e);
                    }
                  }}
                }
              />
              <button
                type="submit"
                className="absolute bottom-4 right-3 bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={!prompt.trim()}
              >
                <Wand2 size={20} />
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}