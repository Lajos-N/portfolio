import { Button } from "@/components/ui/button";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Über mich" },
    { href: "#projects", label: "Projekte" },
    { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
                <a href="#home" className="font-semibold tracking-tight">
                    Lajos
                </a>

                <nav className="hidden items-center gap-1 sm:flex">
                    {links.map((l) => (
                        <Button key={l.href} variant="ghost" size="sm" asChild>
                            <a href={l.href}>{l.label}</a>
                        </Button>
                    ))}
                </nav>

                <div className="sm:hidden">
                    {/*TODO: später: mobiles Menü (Sheet) */}
                    <Button variant="outline" size="sm" asChild>
                        <a href="#contact">Kontakt</a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
