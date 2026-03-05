/**
 * RightArrow Icon Component
 * 
 * A reusable SVG icon component for displaying a right arrow
 * 
 * @param {number} size - Size of the icon in pixels (default: 24)
 * @param {string} color - Fill color of the icon (default: #000000)
 * @param {object} props - Additional SVG attributes (className, style, etc.)
 */
const RightArrow = ({ 
  size = 24, 
  color = "#000000",
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="144 144 512 512"
      fill={color}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m324.43 525.95c-0.003906-3.3398 1.3203-6.5508 3.6797-8.9141l117.06-117.04-117.04-117.04c-4.9141-4.918-4.9141-12.891 0-17.812 4.918-4.9141 12.891-4.9141 17.812 0l134.87 134.87-134.87 134.87c-4.9219 4.9141-12.895 4.9141-17.812 0-2.375-2.3711-3.707-5.5898-3.7031-8.9453z" />
    </svg>
  );
};

export default RightArrow;
