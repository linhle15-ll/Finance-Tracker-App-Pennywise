import { clerkMiddleware,  createRouteMatcher} from "@clerk/nextjs/server";

// protect all routes except from landing page, sign-in and sign-up routes
const isPublicRoute = createRouteMatcher(['/PennyWise/sign-in(.*)', '/PennyWise/sign-up(.*)', '/PennyWise']);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) { // if the request route is different from public routes, then protect
    auth().protect();
  }
});

// export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};