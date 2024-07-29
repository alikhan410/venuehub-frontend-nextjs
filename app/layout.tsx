import "@/styles/globals.css";
// import { Inter as FontSans } from "next/font/google";
import { Metadata, Viewport } from "next";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar/navbar";
import { NavProvider } from "@/context/NavbarContext";
import { getCurrentUser } from "@/actions/auth/getCurrentUser";
import { NavbarOld } from "@/components/navbar/navbarOld";
import { Footer } from "@/components/footer/footer";
import Banner from "@/components/banner/banner";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* <Banner /> */}
          <NavProvider>
            <div className="relative flex flex-col h-screen">
              <Navbar currentUser={currentUser} />
              {/* <NavbarOld /> */}
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
              <Toaster richColors closeButton />
              <Divider />
              <Footer />
              {/* <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">NextUI</p>
                </Link>
              </footer> */}
            </div>
          </NavProvider>
        </Providers>
      </body>
    </html>
  );
}
