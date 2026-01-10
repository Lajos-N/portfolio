import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
    return (
        <section id="home" className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute left-1/2 -top-40 h-96 w-[24rem] -translate-x-1/2 rounded-full blur-3xl opacity-30
                  bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-500"
                />
            </div>
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">
                            React • TypeScript • Tailwind
                        </Badge>
                        <Badge variant="outline">Portfólió</Badge>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Szia, Lajos vagyok.
                    </h1>

                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Junior fejlesztőként tanulok és gyakorlok: modern web
                        UI-k, tiszta komponensek, és jól felépített projektek.
                        Itt találod a munkáimat és a fejlődésemet.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Button asChild>
                            <a href="#projects">Projektek</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="#contact">Kapcsolat</a>
                        </Button>
                    </div>

                    <div className="pt-4 text-sm text-muted-foreground">
                        Elérhető:{" "}
                        <a
                            className="underline underline-offset-4"
                            href="mailto:email@domain.hu"
                        >
                            {/* TODO: später tauschen */}
                            email@domain.hu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
