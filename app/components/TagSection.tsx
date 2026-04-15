"use client";

import '@/app/css/create_new_content_formatting.css';
import { useEffect, useState } from 'react';
import CreateNewTag from './CreateNewTag';
import TagItem from './TagItem';
import { fetchAllTags } from './actions/Tag.actions';

type TagSectionProps = {
    tagType: string | string[];
    displayCreateNewTag: boolean;
}

type TagView = {
    id?: number;
    tag_title: string;
    tag_type: string;
};

export default function TagSection({ tagType, displayCreateNewTag }: TagSectionProps) {
    const [tags, setTags] = useState<TagView[]>([]);
    const [loadError, setLoadError] = useState<string | null>(null);
    const normalizedTagType = Array.isArray(tagType) ? tagType : [tagType];

    useEffect(() => {
        let isMounted = true;
        const loadTags = async () => {
            try {
                setLoadError(null);
                const result = await fetchAllTags();
                if (isMounted) {
                    console.log(result);
                    setTags(result);
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
    }, []);

    return (
        <div className="TagSection-container">
            <h1>Available Tags</h1>
            {tags.map((tag) => (
                <TagItem key={tag.id ?? `${tag.tag_title}-${tag.tag_type}`} tag={tag} />
            ))}
            {loadError ? <p role="alert">{loadError}</p> : null}
            {displayCreateNewTag && <CreateNewTag tagType={normalizedTagType} />}
        </div>
    )
}

