import { Button } from "@/components/ui/button"

function App() {
  return (
    // A Tailwind v4 már alapból támogatja a modern CSS tulajdonságokat
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-500 gap-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Minden rendszer üzemkész! 🚀
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Vite + React + TS + Tailwind v4 + Shadcn UI
        </p>
      </div>

      <div className="flex gap-4">
        {/* Shadcn gomb tesztelése */}
        <Button onClick={() => alert("Működik!")}>
          Kattints rám!
        </Button>

        {/* Másodlagos stílus tesztelése */}
        <Button variant="outline">
          Másodlagos gomb
        </Button>
      </div>

      {/* Tailwind v4 specifikus teszt: új színpaletta vagy inline-stílusok */}
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium">
        Tipp: A Tailwind v4 már CSS-fókuszú konfigurációt használ.
      </div>
    </div>
  )
}

export default App