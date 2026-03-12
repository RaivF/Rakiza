import { useEffect, useLayoutEffect, useRef } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

type ScrollPos = { x: number; y: number }

// Храним позиции скролла по ключу location.key (React Router).
const positions = new Map<string, ScrollPos>()

function getHashId(hash: string) {
  if (!hash || hash === "#") return ""
  return hash.startsWith("#") ? hash.slice(1) : hash
}

/**
 * Управление скроллом при навигации в SPA:
 * - PUSH/REPLACE: скролл в начало страницы (кроме переходов по #якорю)
 * - POP (назад/вперёд): восстановление позиции (кроме переходов по #якорю)
 */
export function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const lastKeyRef = useRef<string>(location.key)

  // Отключаем нативное восстановление скролла, чтобы избежать «прыжков» в SPA.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  // Запоминаем позицию скролла для текущей страницы.
  useEffect(() => {
    const key = location.key

    const save = () => {
      positions.set(key, { x: window.scrollX, y: window.scrollY })
    }

    save()
    window.addEventListener("scroll", save, { passive: true })
    return () => {
      window.removeEventListener("scroll", save)
      save()
    }
  }, [location.key])

  // Восстанавливаем позицию при навигации.
  useLayoutEffect(() => {
    // Сохраняем позицию предыдущей страницы прямо перед переключением.
    const prevKey = lastKeyRef.current
    if (prevKey && prevKey !== location.key) {
      positions.set(prevKey, { x: window.scrollX, y: window.scrollY })
    }
    lastKeyRef.current = location.key

    const hashId = getHashId(location.hash)
    if (hashId) {
      // Переход по #якорю: ждём, пока элемент появится в DOM.
      let attempts = 0
      const maxAttempts = 12
      const tryScroll = () => {
        const el = document.getElementById(hashId)
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" })
          return
        }
        attempts += 1
        if (attempts < maxAttempts) requestAnimationFrame(tryScroll)
        else window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      }
      requestAnimationFrame(tryScroll)
      return
    }

    if (navigationType === "POP") {
      const pos = positions.get(location.key)
      if (pos) {
        window.scrollTo({ left: pos.x, top: pos.y, behavior: "auto" })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.key, location.hash, navigationType])

  return null
}
