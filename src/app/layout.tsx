import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semantic Versioning Test",
  description: "Semantic Versioning Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
      <>hello</>
    </html>
  );
}
