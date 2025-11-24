import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  const token = request.headers.get("cookie")?.match(/token=([^;]+)/)?.[1] || "";

  const protectedRoutes = ["/dashboard"];

  const isProtected = protectedRoutes.some((route) =>
    new URL(request.url).pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return redirect("/login");
  }

  const response = await next();
  if (isProtected) {
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  return response;
};
