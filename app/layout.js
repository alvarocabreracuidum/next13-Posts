import '../styles/globals.css'

import { Navigation } from "./components/Navigation"
import { ScrollingBanner } from "./components/ScrollingBanner"

export default function RootLayout({ children }) {
 return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body >
        <Navigation />
        <ScrollingBanner />
        {children}
      </body>
    </html>
  )
}
