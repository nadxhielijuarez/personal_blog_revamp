"use client";

import '@/app/css/create_new_content_formatting.css';
import { useEffect, useState } from 'react';
import CreateNewTag from './CreateNewTag';
import TagItem from './TagItem';
import { fetchAllTags } from './actions/Tag.actions';

type TagSectionProps = {
    tagType: string | string[];
    displayCreateNewTag: boolean;
    onTagSelect?: (tagTitle: string) => void;
}

type TagView = {
    id?: number;
    tag_title: string;
    tag_type: string;
};

export default function TagSection({ tagType, displayCreateNewTag, onTagSelect }: TagSectionProps) {
    const [tags, setTags] = useState<TagView[]>([]);
    const [loadError, setLoadError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        const loadTags = async () => {
            try {
                setLoadError(null);
                const allTags = await fetchAllTags();
                const filteredTypeTags = allTags.filter((tag) => tag.tag_type === tagType);
                if (isMounted) {
                    setTags(filteredTypeTags);
                }
            } catch (error) {
                if (isMounted) {
                    setLoadError(error instanceof Error ? error.message : "Failed to load tags.");
                }
            }
        };
        loadTags();
        return () => {
            isMounted = false;
        };
    }, [tagType]);

    return (
        <div className="TagSection-container">
            <h1>Available Tags</h1>
            {tags.map((tag) => (
                <TagItem
                    key={tag.id ?? `${tag.tag_title}-${tag.tag_type}`}
                    tag={tag}
                    onClick={onTagSelect}
                />
            ))}
            {loadError ? <p role="alert">{loadError}</p> : null}
            {displayCreateNewTag && <CreateNewTag tagType={tagType} />}
        </div>
    )
}

