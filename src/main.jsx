import React from 'react'
import ReactDOM from 'react-dom/client'
import {


  RouterProvider,
} from "react-router-dom";
import './index.css'

import { HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { router } from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className=" max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
