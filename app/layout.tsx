import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProvider";


export const metadata: Metadata = {
  title: "Polyglot App",
  description: "Realtime chat app with translation ability",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <ClientProviders>
      {/* wrap entire application in the auth provider || client provider */}
      <html lang="en">
        <body className={"flex flex-col min-h-screen"}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClientProviders>

  );
}


