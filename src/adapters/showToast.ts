import { toast } from 'react-toastify';
import { Dialog } from '../components/dialog';

export const showToast = {
  success: (message: string) => {
    toast.success(message);
  },
  error: (message: string) => {
    toast.error(message);
  },
  info: (message: string) => {
    toast.info(message);
  },
  warning: (message: string) => {
    toast.warn(message);
  },
  warn: (message: string) => {
    toast.warn(message);
  },
  default: (message: string) => {
    toast(message);
  },
  dismiss: () => {
    toast.dismiss();
  },
  confirm: (
    data: { title: string; description: string },
    onClosing: (confirmation: boolean) => void,
  ) => {
    toast(Dialog, {
      onClose: confirmation => {
        if (confirmation) {
          return onClosing(true);
        }
        return onClosing(false);
      },
      data,
      autoClose: false,
      draggable: false,
      closeButton: false,
      closeOnClick: false,
    });
  },
};
