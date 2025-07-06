import { toast } from 'react-toastify';

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
};
