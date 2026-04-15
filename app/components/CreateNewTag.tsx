"use client";

import '@/app/css/create_new_content_formatting.css';
import Image from 'next/image';
import addNew from '@/app/images/AddNewContent2.png';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { createTagFromForm } from './actions/Tag.actions';

const TAG_TITLE_MAX = 200;

export type CreateNewTagPayload = {
    tagTitle: string;
    tagType: string;
}

type CreateNewTagProps = {
    tagType: string[];
}

export default function CreateNewTag({ tagType }: CreateNewTagProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newTagTitle, setNewTagTitle] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [saveOk, setSaveOk] = useState(false);

    const openPopup = () => {
        setSaveError(null);
        setSaveOk(false);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setNewTagTitle("");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSaveError(null);
        setSaveOk(false);
        const trimmedTagTitle = newTagTitle.trim().toLowerCase();
        if (!trimmedTagTitle) {
            setSaveError("Tag name is required.");
            return;
        }
        if (trimmedTagTitle.length > TAG_TITLE_MAX) {
            setSaveError(`Tag name must be ${TAG_TITLE_MAX} characters or fewer.`);
            return;
        }
        const newTagPayload: CreateNewTagPayload = {
            tagTitle: trimmedTagTitle,
            tagType: tagType,
        };
        try {
            setIsSubmitting(true);
            await createTagFromForm(newTagPayload);
            setSaveOk(true);
            closePopup();
        } catch (error) {
            setSaveError(error instanceof Error ? error.message : "Failed to save tag.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="CreateNewTag-container">
            <button
                type="button"
                className="CreateNewTag-trigger"
                onClick={openPopup}
                aria-label="Create new tag"
            >
                <Image className="CreateNewTag-image" src={addNew} alt="Add New" />
            </button>

            {isPopupOpen && (
                <div className="CreateNewTag-popup-overlay" role="dialog" aria-modal="true">
                    <form className="CreateNewTag-popup" onSubmit={handleSubmit}>
                        <h2 className="CreateNewTag-popup-title">Create New Tag</h2>
                        <input
                            className="CreateNewTag-input"
                            type="text"
                            placeholder="Tag name"
                            value={newTagTitle}
                            onChange={(event) => setNewTagTitle(event.target.value)}
                        />
                        <div className="CreateNewTag-actions">
                            <button type="button" onClick={closePopup} disabled={isSubmitting}>
                                Cancel
                            </button>
                            <button type="submit" disabled={isSubmitting || !newTagTitle.trim()}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                        {saveError ? (
                            <p className="CreateNewTag-error" role="alert">
                                {saveError}
                            </p>
                        ) : null}
                    </form>
                </div>
            )}
            {saveOk ? (
                <p className="CreateNewTag-success" role="status">
                    Tag created.
                </p>
            ) : null}
        </div>
    )
}

