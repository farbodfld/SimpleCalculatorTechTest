import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calculator, X, ChevronRight, Palette, RefreshCcw } from 'lucide-react';
import './App.css';

const API_BASE_URL = 'http://localhost:5282/api/calculator';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('premium'); // 'premium' or 'brutal'
  const [loading, setLoading] = useState(false);
  const [operation, setOperation] = useState('add');
  const [start, setStart] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const toggleTheme = () => {
    setTheme(prev => prev === 'premium' ? 'brutal' : 'premium');
  };

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    try {
      // Note: In production, the port might change. Default for dotnet run is often 5000/5001 or random in VS.
      // I'll try to use a relative path if they were hosted together, but here they are separate.
      const resp = await axios.get(`${API_BASE_URL}/${operation}`, {
        params: { start, amount }
      });
      setResult(resp.data.result);
    } catch (err) {
      console.error(err);
      setError("Failed to connect to API. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStart(0);
    setAmount(0);
    setResult(null);
    setError(null);
  };

  return (
    <div className={`app-container ${theme === 'brutal' ? 'theme-brutal' : ''}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        <Palette size={18} />
        Style: {theme === 'premium' ? 'Modern Glass' : 'Neo-Brutalism'}
      </button>

      <main className="hero slide-up">
        <h1>Cloud Calculator</h1>
        <p>A high-performance calculation engine built with .NET 8 and React. Modern, responsive, and reliable.</p>
        
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          Open Calculator <ChevronRight size={20} />
        </button>
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <header className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Calculator size={24} color={theme === 'premium' ? 'var(--primary)' : '#000'} />
                <h2>Calculator Engine</h2>
              </div>
              <button className="btn-close" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </header>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="operation-selector">
                <button 
                  className={`op-btn ${operation === 'add' ? 'active' : ''}`}
                  onClick={() => setOperation('add')}
                >
                  ADD
                </button>
                <button 
                  className={`op-btn ${operation === 'subtract' ? 'active' : ''}`}
                  onClick={() => setOperation('subtract')}
                >
                  SUBTRACT
                </button>
              </div>

              <div className="form-group">
                <label>Starting Value</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={start} 
                  onChange={e => setStart(Number(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label>Amount to {operation === 'add' ? 'Add' : 'Subtract'}</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={amount} 
                  onChange={e => setAmount(Number(e.target.value))}
                />
              </div>

              {error && <p style={{ color: 'var(--danger)', fontSize: '0.875rem', marginTop: '1rem' }}>{error}</p>}
            </div>

            {/* Modal Footer */}
            <footer className="modal-footer">
              <div className="footer-left">
                {result !== null ? (
                  <div className="result-badge">Result: {result}</div>
                ) : (
                  <button className="btn-close" onClick={resetForm} title="Reset">
                    <RefreshCcw size={18} />
                  </button>
                )}
              </div>
              <button className="btn-action" onClick={handleCalculate} disabled={loading}>
                {loading ? 'Processing...' : 'Calculate'}
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
