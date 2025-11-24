import { toastAdapter } from "./adapter";

export const notify = {
  success: (msg: string) => toastAdapter.success(msg),
  error: (msg: string) => toastAdapter.error(msg),
  info: (msg: string) => toastAdapter.info(msg),
  warning: (msg: string) => toastAdapter.warning(msg),
  loading: (msg: string) => toastAdapter.loading(msg),

  promise: <T>(promise: Promise<T>, msgs: any) =>
    toastAdapter.promise(promise, msgs),
};
