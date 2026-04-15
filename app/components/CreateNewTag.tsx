import '@/app/css/create_new_content_formatting.css';
import Image from 'next/image';
import addNew from '@/app/images/AddNewContent2.png';
import type { FormEvent } from 'react';
import { useState } from 'react';

export default function CreateNewTag() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newTagName, setNewTagName] = useState("");

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setNewTagName("");
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedTagName = newTagName.trim();
        if (!trimmedTagName) {
            return;
        }
        // TODO: Replace with real create-tag action.
        console.log("Creating new tag:", trimmedTagName);
        closePopup();
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
                            value={newTagName}
                            onChange={(event) => setNewTagName(event.target.value)}
                        />
                        <div className="CreateNewTag-actions">
                            <button type="button" onClick={closePopup}>
                                Cancel
                            </button>
                            <button type="submit" disabled={!newTagName.trim()}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

