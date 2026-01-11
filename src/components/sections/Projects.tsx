// src/components/sections/Projects.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Projekt 1",
        description: "Kurze Beschreibung des Projekts...",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/...",
    },
    {
        title: "Projekt 2",
        description: "Kurze Beschreibung des Projekts...",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/...",
    },    
];

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold">Projekte</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title}>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm" asChild>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ansehen →
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
