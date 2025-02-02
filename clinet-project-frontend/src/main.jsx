import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <UserContextProvider>
        {/* ToastContainer for global configuration */}
        <ToastContainer
          position="top-right" // Placement of toasts
          autoClose={3000} // Auto-close duration (ms)
          hideProgressBar={false} // Show or hide progress bar
          newestOnTop={false} // Show latest toast on top
          closeOnClick // Close toast on click
          rtl={false} // Support for right-to-left languages
          pauseOnFocusLoss // Pause when the browser loses focus
          draggable // Allow dragging to dismiss
          pauseOnHover // Pause auto-close when hovered
          theme="colored" // Theme of the toasts (light, dark, or colored)
        />
        <App />
      </UserContextProvider>
    </StrictMode>
  </BrowserRouter>
);
