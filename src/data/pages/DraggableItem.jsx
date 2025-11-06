// src/data/pages/DraggableItem.jsx
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function DraggableItem({ id, content }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    padding: '10px 14px',
    marginBottom: '8px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
    cursor: 'grab',
    boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <span style={{ marginRight: '8px', fontSize: '16px' }}>Drag</span> {content}
    </div>
  );
}