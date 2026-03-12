import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "@/App"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"

const BASE_URL = import.meta.env.BASE_URL ?? "/"
// React Router ожидает basename без завершающего слеша (кроме случая "/").
const BASENAME = BASE_URL === "/" ? "/" : BASE_URL.replace(/\/$/, "")

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <BrowserRouter basename={BASENAME}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
