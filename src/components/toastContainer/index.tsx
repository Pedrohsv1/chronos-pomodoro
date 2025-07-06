import type { ReactNode } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

interface ShowToastContainerProps {
  children: ReactNode;
}

export const ShowToastContainer = ({ children }: ShowToastContainerProps) => {
  return (
    <>
      {children}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
};
