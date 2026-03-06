import { motion } from 'framer-motion';

interface CinematicTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function CinematicText({ text, className = "", delay = 0 }: CinematicTextProps) {
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <motion.span
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      className={`inline-block font-display ${className}`}
    >
      <span className="italic mr-[-0.05em]">{firstLetter}</span>
      <span>{restOfText}</span>
    </motion.span>
  );
}
