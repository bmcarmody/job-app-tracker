import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/sign-in*", "/sign-up*"];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

const redirectToUrl = (url: string, request: NextRequest): NextResponse => {
  const redirectUrl = new URL(url, request.url);
  redirectUrl.searchParams.set("redirect_url", request.url);

  return NextResponse.redirect(redirectUrl);
};

export default withClerkMiddleware((request: NextRequest) => {
  const { userId } = getAuth(request);

  console.log("basePath", request.nextUrl.pathname);

  if (userId && isPublic(request.nextUrl.pathname)) {
    return redirectToUrl("/dashboard", request);
  }

  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
