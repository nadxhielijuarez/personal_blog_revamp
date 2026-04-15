type Tag = {
    id?: number;
    tag_title: string;
    tag_type: string;
};

export default function TagItem({ tag }: { tag: Tag }) {
    return (
        <div className="tag-item-container">
            <span className="tag-item-title">{tag.tag_title}</span>
        </div>
    )
}