
import React, { Component, ReactNode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

interface Props { children?: ReactNode; }
interface State { hasError: boolean; }

/**
 * Fix: Explicitly using Component (imported from 'react') and declaring state/props properties.
 * This ensures that 'props' and 'state' are correctly recognized by the TypeScript compiler 
 * on the class instance, resolving the 'Property props/state does not exist' errors.
 */
class GlobalErrorBoundary extends Component<Props, State> {
  // Fix: Explicitly declaring state and props to resolve missing property errors in some TS configurations
  public state: State;
  public props: Props;

  constructor(props: Props) {
    super(props);
    // Fix: state initialization is now correctly recognized by the compiler
    this.state = { hasError: false };
    // Fix: props assignment is now correctly recognized
    this.props = props;
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Dabar Critical Fail:", error, errorInfo);
  }

  public render() {
    // Fix: Accessing this.state is now correctly typed
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-10 text-center font-sans">
          <h1 className="text-3xl font-black uppercase mb-4 tracking-tighter italic">Erro de Inicialização</h1>
          <p className="text-slate-400 mb-8 max-w-md">Falha crítica no motor Dabar. Tente resetar os dados locais.</p>
          <div className="flex gap-4">
            <button onClick={() => window.location.reload()} className="bg-indigo-600 px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest">Recarregar</button>
            <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="bg-rose-600 px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest">Reset Total</button>
          </div>
        </div>
      );
    }
    // Fix: Accessing this.props.children is now correctly typed
    return this.props.children;
  }
}

const initApp = () => {
  console.log("Dabar: Booting System...");
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <GlobalErrorBoundary>
          <App />
        </GlobalErrorBoundary>
      </React.StrictMode>
    );
    console.log("Dabar: UI Mounted.");
    
    // Remove Launch Screen
    const launch = document.getElementById('launch-screen');
    if (launch) {
      launch.style.opacity = '0';
      setTimeout(() => launch.remove(), 500);
    }
  } else {
    console.error("Dabar: Target container #root not found.");
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
