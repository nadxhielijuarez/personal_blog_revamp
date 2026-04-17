type Tag = {
    tag_id?: number;
    tag_title: string;
    tag_type: string;
};

type TagItemProps = {
    tag: Tag;
    onClick?: (tagID: number) => void;
};

export default function TagItem({ tag, onClick }: TagItemProps) {
    const handleClick = () => {
        if (typeof tag.tag_id === "number") {
            onClick?.(tag.tag_id);
        }
    };

    return (
        <button type="button" className="tag-item-container" onClick={handleClick}>
            <span className="tag-item-title">{tag.tag_title ?? ''}</span>
        </button>
    )
}