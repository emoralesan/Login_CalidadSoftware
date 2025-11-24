import { toast } from "sonner";

export const toastAdapter = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  info: (msg: string) => toast(msg),
  warning: (msg: string) => toast.warning ? toast.warning(msg) : toast(msg),
  loading: (msg: string) => toast.loading(msg),
  promise: toast.promise
};
