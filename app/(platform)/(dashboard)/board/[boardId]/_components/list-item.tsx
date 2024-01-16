'use client';

import { List } from '@prisma/client';
import { ListHeader } from './list-header';
import { ElementRef, useRef, useState } from 'react';

interface ListItemProps {
  data: List;
  index: number;
}

export const ListItem = ({ index, data }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<'textarea'>>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader data={data} onAddCard={() => {}} />
      </div>
    </li>
  );
};
