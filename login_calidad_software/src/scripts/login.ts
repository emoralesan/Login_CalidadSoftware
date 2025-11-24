import { api, notify, showLoader, hideLoader } from "@libs";

export function initLoginForm(): void {
  const form = document.getElementById("loginForm") as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    showLoader();

    try {
      const result = await api.post("/auth/login", { email, password });

      if (result?.success) {
        localStorage.setItem("token", result.token);
        document.cookie = `token=${result.token}; path=/;`;
        sessionStorage.setItem("login_success", "1");
        window.location.href = "/dashboard";
        return;
      }
      notify.error(result?.message ?? "Invalid credentials");

    } catch (error: any) {
      const msg =
        error?.response?.data?.message ??
        "Invalid credentials";

      notify.error(msg);
    } finally {
      hideLoader();
    }
  });
}
