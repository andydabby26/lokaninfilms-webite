import { Link } from "wouter";
import { Project } from "@/lib/projects";
import { motion } from "framer-motion";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-6"
    >
      <Link href={`/projects/${project.id}`} className="block overflow-hidden aspect-[16/9]">
        <img
          src={project.thumbnail || project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </Link>
      
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <Link href={`/projects/${project.id}`}>
            <h3 className="font-display text-2xl font-bold tracking-tight uppercase group-hover:text-muted-foreground transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
            {project.format}
          </p>
        </div>
        <span className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}
