type Tag = {
    tag_id?: number;
    tag_title: string;
    tag_type: string;
};

type TagItemProps = {
    tag: Tag;
    onClick?: (tagTitle: string) => void;
};

export default function TagItem({ tag, onClick }: TagItemProps) {
    const handleClick = () => {
        // console.log(tag.tag_title);
        // console.log(tag.tag_id);
        onClick?.(tag.tag_id);
    };

    return (
        <button type="button" className="tag-item-container" onClick={handleClick}>
            <span className="tag-item-title">{tag.tag_title}</span>
        </button>
    )
}