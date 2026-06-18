import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router basename="/commission_website_-yasin">
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  🚀 Influencer Marketplace
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Connect Brands with Content Creators
                </p>
                <p className="text-sm text-gray-500">
                  Platform is loading...
                </p>
              </div>
            </div>
          } />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
