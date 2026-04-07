import { useNavigate } from 'react-router-dom';

export default function Button({ text, link, className = '' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if it's an internal route (starts with /) or external link
    if (link.startsWith('/')) {
      navigate(link);
    } else if (link.startsWith('./') || link.startsWith('../')) {
      // Handle relative routes by converting to absolute paths
      navigate(link);
    } else if (link === '#') {
      // Handle hash links (no-op)
      return;
    } else {
      // External links - open in new tab
      window.open(link, '_blank');
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
