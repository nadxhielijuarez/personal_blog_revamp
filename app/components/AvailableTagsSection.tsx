import '@/app/css/create_new_content_formatting.css';
import Image from 'next/image';
import addNew from '@/app/images/AddNewContent2.png';
import CreateNewTag from './CreateNewTag';

type AvailableTagsSectionProps = {
    tagType: string[];
    displayCreateNewTag: boolean;
}

export default function AvailableTagsSection({ tagType, displayCreateNewTag }: AvailableTagsSectionProps) {
    return (
        <div className="AvailableTagsSection-container">
            <h1>Available Tags</h1>
            {displayCreateNewTag && <CreateNewTag />}
        </div>
    )
}

