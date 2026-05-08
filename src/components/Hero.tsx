import { motion } from "motion/react";
import { Calendar, Check, Clock, Folder, Mail, MessagesSquare, Timer } from "lucide-react";
import BrandIcon from "./BrandIcon";

const avatar = (seed: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;

function TaskCard({
  badge,
  color,
  name,
  seeds,
  percent,
  danger
}: {
  badge: string;
  color: string;
  name: string;
  seeds: string[];
  percent: string;
  danger?: boolean;
}) {
  return (
    <div className="w-72 rounded-xl bg-white/95 p-3 text-left shadow-lg shadow-black/10">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-white" style={{ backgroundColor: color }}>
            {badge}
          </span>
          <span className="text-sm font-medium text-[#141414]">{name}</span>
        </div>
        <div className="flex -space-x-2">
          {seeds.map((seed) => (
            <img
              key={seed}
              src={avatar(seed)}
              referrerPolicy="no-referrer"
              className="h-7 w-7 rounded-full border-2 border-white bg-gray-100"
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-500">May 2026</span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
          <div className={`h-full rounded-full ${danger ? "bg-[#FF5252]" : "bg-[#00BFFF]"}`} style={{ width: percent }} />
        </div>
        <span className="text-[11px] text-gray-400">{percent}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="bg-[#FDFDFD] px-3 pb-10 sm:px-5 md:px-8">
      <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white px-5 py-32 text-center md:rounded-[2.5rem]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "#ffffff",
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }}
        />

        <motion.div
          className="absolute left-0 top-16 scale-[0.4] sm:scale-50 md:-left-12 md:scale-75 lg:scale-90"
          initial={{ opacity: 0, rotate: 2 }}
          animate={{ opacity: 1, rotate: 3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-56 bg-[#FFF188] p-7 text-left font-handwriting text-[21px] leading-6 text-[#424242] shadow-xl">
            <span className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-[#D32F2F] shadow" />
            Document each milestone, collect screenshots, and present the project story clearly.
          </div>
          <motion.div
            className="relative mt-10"
            initial={{ opacity: 0, rotate: 6 }}
            animate={{ opacity: 1, rotate: 12 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Folder className="h-auto w-72 fill-white/60 text-gray-200 drop-shadow-xl" />
            <div className="absolute left-24 top-20 rotate-[-2deg] rounded-2xl bg-white p-4 shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2563EB]">
                <Check className="h-8 w-8 text-white" />
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-20 -left-8 scale-[0.4] sm:scale-50 md:scale-75 lg:scale-90"
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Folder className="h-auto w-[450px] fill-[#F2F3F5] text-gray-200 drop-shadow-xl" />
          <div className="absolute left-20 top-24">
            <h3 className="mb-4 text-left text-xl font-medium tracking-tight">Project Phases</h3>
            <div className="space-y-3">
              <TaskCard badge="1" color="#FF5722" name="Proposal" seeds={["Felix", "Aneka"]} percent="80%" />
              <TaskCard badge="3" color="#00C853" name="Visio Diagram" seeds={["Sam", "Maya"]} percent="65%" danger />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-24 -right-8 scale-[0.4] sm:scale-50 md:scale-75 lg:scale-90"
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Folder className="h-auto w-[450px] fill-[#F2F3F5] text-gray-200 drop-shadow-xl" />
          <div className="absolute left-24 top-28">
            <h3 className="mb-5 text-left text-xl font-medium tracking-tight">Shared Work</h3>
            <div className="flex gap-4">
              {[Mail, MessagesSquare, Calendar].map((Icon, index) => (
                <div key={index} className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg transition hover:scale-105">
                  <Icon className="h-9 w-9" color={["#EA4335", "#4A154B", "#4285F4"][index]} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-32 -top-10 scale-[0.4] sm:scale-50 md:scale-75 lg:scale-90"
          initial={{ opacity: 0, x: 50, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Folder className="h-auto w-[420px] fill-[#F2F3F5] text-gray-200 drop-shadow-xl" />
          <div className="absolute left-20 top-24 w-72 text-left">
            <h3 className="mb-4 text-xl font-medium tracking-tight">Deadlines</h3>
            <div className="relative rounded-2xl bg-white/90 p-5 shadow-xl">
              <span className="absolute -right-4 -top-3 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-medium text-white shadow-lg">
                Final
              </span>
              <p className="text-sm font-medium text-[#141414]">Project Website</p>
              <p className="mt-2 text-sm text-gray-400">Review with partner and prepare presentation.</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E1F5FE] px-3 py-2 text-xs font-medium text-[#03A9F4]">
                <Clock className="h-4 w-4" />
                13:00 - 13:45
              </div>
            </div>
          </div>
          <motion.div
            className="absolute left-2 top-36 rotate-[-8deg] rounded-2xl bg-white p-5 shadow-xl"
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Timer className="h-10 w-10 text-[#141414]" />
            <span className="absolute left-1/2 top-3 h-12 w-1 -rotate-45 rounded-full bg-[#D32F2F]" />
          </motion.div>
          <Folder className="absolute left-0 top-0 h-auto w-[420px] rotate-[15deg] fill-white/60 text-transparent" />
        </motion.div>

        <div className="relative z-10 flex max-w-5xl flex-col items-center">
          <motion.a
            href="https://postula-pro.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mb-8 rounded-2xl bg-white p-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            aria-label="Open PostulaPro"
          >
            <BrandIcon />
          </motion.a>
          <motion.h1
            className="max-w-4xl text-4xl font-medium tracking-tight text-[#141414] md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plan, build, and present <br />
            <span className="text-gray-500">every project milestone</span>
          </motion.h1>
          <motion.p
            id="intro"
            className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            This web page introduces our team, explains why we chose the idea, and organizes each phase of our course
            project with screenshots and links to the work.
          </motion.p>
          <motion.a
            href="#milestones"
            className="mt-9 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            View milestones
          </motion.a>
        </div>
      </div>
    </section>
  );
}
