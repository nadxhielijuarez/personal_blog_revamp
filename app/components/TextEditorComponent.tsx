import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface BlogEditorProps {
  onChange?: (html: string) => void;
}

export default function BlogEditor({ onChange }: BlogEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'link'],
            ['clean']
          ]
        }
      });

      quillRef.current.on('text-change', () => {
        const html = quillRef.current?.getSemanticHTML() ?? '';
        onChange?.(html);
      });
    }
  }, []);

  return <div ref={editorRef} />;
}