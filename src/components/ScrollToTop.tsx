import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Rocket } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-xl shadow-blue-500/25 md:bottom-8 md:right-8"
          initial={{ opacity: 0, y: 24, rotate: -12, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, rotate: 12, scale: 0.85 }}
          whileHover={{ y: -6, rotate: -8, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          aria-label="Scroll to top"
        >
          <motion.span
            className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#FFF188] shadow-md"
            animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <Rocket className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
