import ReactQueryProvider from "@/components/common/ReactQueryProvider";

export const metadata = {
  title: 'RIOT API Practice',
  description: 'RIOT API Practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <ReactQueryProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ReactQueryProvider>
  )
}
