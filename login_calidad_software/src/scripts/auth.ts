export function logout(): void {

    localStorage.removeItem("token");
  
    document.cookie = "token=; Max-Age=0; path=/;";
  
    window.location.href = "/login";
  }
  