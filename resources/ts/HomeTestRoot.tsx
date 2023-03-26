import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomeTest from './pages/HomeTest';

const container = document.getElementById('homeTest')!;
const props = Object.assign({}, container?.dataset)
const root = createRoot(container);
root.render(<StrictMode><HomeTest {...props}/></StrictMode>)