import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
type Toast = {
  showToast: boolean;
  quantity: string;
  text: string;
};

type ToastContextType = {
  toast: Toast;
  setToast: (toast: Toast) => void;
};

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

function ToastProvider({ children }: PropsWithChildren) {
  const [toast, setToast] = useState<Toast>({
    showToast: false,
    quantity: '0',
    text: '',
  });

  useEffect(() => {
    if (toast.showToast) {
      setTimeout(() => {
        setToast((prevState) => ({
          ...prevState,
          showToast: false,
        }));
      }, 2000);
    }
  }, [toast]);

  return (
    <ToastContext.Provider
      value={{
        toast,
        setToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
