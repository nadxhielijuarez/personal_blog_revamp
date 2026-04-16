type CardTagListProps = {
  tags: string[];
  className?: string;
};

export default function CardTagList({ tags, className }: CardTagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className={className ?? "CardTagList"} aria-label="Tag list">
      {tags.map((tag) => (
        <span key={tag} className="CardTagList-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
