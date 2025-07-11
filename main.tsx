import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './src/app/providers/ThemeProvider/ui/ThemeProvider.tsx'
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider.tsx'
import { ErrorBoundary } from './src/app/providers/ErrorBoundary/index.tsx'
import App from './src/app/App.tsx'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element not found. Failed to render app')
}

const root = createRoot(container)

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>
)
