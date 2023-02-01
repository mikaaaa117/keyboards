import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppContext from './AppContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppContext>
  </React.StrictMode>
);
