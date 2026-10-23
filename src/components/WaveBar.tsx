interface WaveBarProps {
  count?: number;
  barWidth?: number;
  gap?: number;
}

export default function WaveBar({ count = 20, barWidth = 3, gap = 3 }: WaveBarProps) {
  return (
    <div className="flex items-end gap-[3px] h-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{
            width: `${barWidth}px`,
            height: `${Math.random() * 60 + 20}%`,
            animationDelay: `${i * 0.1}s`,
            background: `linear-gradient(to top, var(--neon-cyan), var(--neon-purple))`,
          }}
        />
      ))}
    </div>
  );
}
