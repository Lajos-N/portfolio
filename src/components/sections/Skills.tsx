import { Badge } from "@/components/ui/badge";

const skills = {
    sprachen: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C#"],
    frameworks: ["React", "Tailwind CSS", "Vite"],
    tools: ["Git", "GitHub", "VS Code", "Figma"],
};

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold">Fähigkeiten</h2>

            <div className="mt-8 space-y-10">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Sprachen
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.sprachen.map((s) => (
                            <Badge key={s} variant="secondary">
                                {s}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Frameworks
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.frameworks.map((s) => (
                            <Badge key={s} variant="outline">
                                {s}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Tools
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.tools.map((s) => (
                            <Badge key={s}>{s}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
