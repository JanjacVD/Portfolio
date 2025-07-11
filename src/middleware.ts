import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "hr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return response;
  }

  const pathLang = pathname.split("/")[1];
  const hasLocale = locales.includes(pathLang);

  if (!hasLocale) {
    const defaultLocale = request.cookies.get("NEXT_LOCALE")?.value || "en";
    const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url);

    // Optional: Set cookie
    response.cookies.set("NEXT_LOCALE", defaultLocale);
    return NextResponse.redirect(redirectUrl);
  }

  // Update cookie with detected locale
  response.cookies.set("NEXT_LOCALE", pathLang);

  return response;
}
