import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono-eyebrow text-blue">404</p>
        <h1 className="mt-4 text-4xl font-display italic text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-ink/70">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-pill btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display italic text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-ink/70">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-pill btn-primary">Try again</button>
          <a href="/" className="btn-pill btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Med Estate — The Leading Real Estate Company in the UAE" },
      { name: "description", content: "Beachfront villas, penthouses, and coastal homes across the UAE. Where the Mediterranean meets the Gulf." },
      { property: "og:title", content: "Med Estate — The Leading Real Estate Company in the UAE" },
      { property: "og:description", content: "Beachfront villas, penthouses, and coastal homes across the UAE. Where the Mediterranean meets the Gulf." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Med Estate — The Leading Real Estate Company in the UAE" },
      { name: "twitter:description", content: "Beachfront villas, penthouses, and coastal homes across the UAE. Where the Mediterranean meets the Gulf." },
      { property: "og:image", content: "https://id-preview--24f967db-11c1-43ac-bd5a-9bd64aeef82a.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://id-preview--24f967db-11c1-43ac-bd5a-9bd64aeef82a.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italianno&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
