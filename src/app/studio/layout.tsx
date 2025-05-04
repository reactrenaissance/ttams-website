export const metadata = {
  title: 'Studio',
  description: 'Sanity Studio Embedded',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
