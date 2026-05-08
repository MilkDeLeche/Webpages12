import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, FileText, MonitorCog, Presentation, Workflow, X } from "lucide-react";

const milestones = [
  {
    id: "proposal",
    title: "Project 1 - Proposal",
    copy: "The proposal establishes the need and business use case for the system. It explains the problem, the intended audience, the value of the idea, and the early requirements that guided the rest of the project.",
    image: "/proposal.png",
    icon: FileText,
    file: "/project1proposal.pdf",
    fileType: "pdf"
  },
  {
    id: "planning",
    title: "Project 2 - Microsoft Project",
    copy: "The project schedule breaks the work into tasks, dates, and responsibilities. This milestone shows how the team planned the timeline and tracked progress through the Systems Development Life Cycle.",
    image: "/notebook.png",
    icon: Workflow,
    file: "/Project%20Notebook.pdf",
    fileType: "pdf"
  },
  {
    id: "visio",
    title: "Project 3 - Microsoft Visio",
    copy: "The Visio diagram documents the logical structure of the system. It turns the planning work into a visual model that helps explain how major pieces of the project connect.",
    image: "/visio.png",
    icon: MonitorCog,
    file: "/PROJECT3VISIO%20(1).pdf",
    fileType: "pdf"
  },
  {
    id: "development",
    title: "Project 4 - Development",
    copy: "The development phase turns the planned idea into a working web presence. This page collects the implementation evidence and shows how the team moved from design into a usable result.",
    image: "/project05.png",
    icon: ArrowUpRight,
    file: "/project05.png",
    fileType: "image"
  },
  {
    id: "presentation",
    title: "Project 5 - Microsoft PowerPoint",
    copy: "The final presentation summarizes the project, team decisions, screenshots, and completed files. It prepares the website to be used during the final course presentation.",
    image: "/project05.png",
    icon: Presentation,
    file: "/PostulaPro%20Final.pptx",
    fileType: "pptx"
  }
];

export default function Milestones() {
  const [preview, setPreview] = useState<(typeof milestones)[number] | null>(null);

  return (
    <section id="milestones" className="bg-[#FDFDFD] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#2563EB]">Course Project Website</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#141414] md:text-5xl">
            One shared site for every phase of the project.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-500">
            Our team chose this idea because it gives us a clean way to show planning, development, diagramming, and
            presentation work in one place. Each milestone below includes a screenshot and a direct link to the related
            file.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                id={item.id}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
                initial={{ opacity: 0, y: 36, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.32), ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <motion.img
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    className="h-full w-full object-cover object-top"
                    initial={{ scale: 1.04 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <button
                      type="button"
                      onClick={() => setPreview(item)}
                      className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#141414] transition hover:bg-gray-50"
                    >
                      Open file
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 text-gray-500">{item.copy}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {preview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-black/10 px-5 py-4">
              <h3 className="text-lg font-medium tracking-tight text-[#141414]">{preview.title}</h3>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#141414] transition hover:bg-gray-50"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[calc(90vh-73px)] overflow-auto bg-gray-50 p-4">
              {preview.fileType === "pdf" ? (
                <iframe
                  src={preview.file}
                  title={`${preview.title} file`}
                  className="h-[74vh] w-full rounded-xl border border-black/10 bg-white"
                />
              ) : preview.fileType === "pptx" ? (
                <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-center shadow-sm">
                  <img
                    src={preview.image}
                    alt={`${preview.title} preview`}
                    className="mx-auto h-auto max-w-full rounded-xl bg-white shadow-sm"
                  />
                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500">
                    PowerPoint files usually open in PowerPoint or download from the browser. Use the button below to
                    open the actual presentation file, then close this preview to return to the website.
                  </p>
                  <a
                    href={preview.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20"
                  >
                    Open PowerPoint
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <img
                  src={preview.file}
                  alt={`${preview.title} preview`}
                  className="mx-auto h-auto max-w-full rounded-xl bg-white shadow-sm"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
