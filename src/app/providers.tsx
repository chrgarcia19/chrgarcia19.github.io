"use client";

import { ThemeProvider } from "next-themes";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
        <GoogleReCaptchaProvider
          reCaptchaKey="6LdZCLsrAAAAAJ1NTzf9mBesYx0WqCY2Y0rVWGyW"
          scriptProps={{
          async: true,
          defer: true,
          appendTo: 'head',
          }}
        >
          {children}
        </GoogleReCaptchaProvider>
      </ThemeProvider>
    </>
  );
}
