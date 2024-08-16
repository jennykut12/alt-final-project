'use client';
import React, { useState } from 'react';
import { Dropdown } from 'react-daisyui';

type Props = {
  data: string[];
  title: string;
  onSelect: (value: string) => void;
};

const DropdownMenu = ({ data, title, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | string[]>('');

  return (
    <Dropdown open={isOpen}>
      <div
        className="w-[200px] h-[60px] border-2 flex border-gray-200 rounded-3xl bg-white justify-center items-center font-normal text-[16px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected === '' ? title : selected}
      </div>
      <Dropdown.Menu className="w-52 mt-2">
        {data.map((info, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => {
              onSelect(info), setIsOpen(!isOpen);
            }}
          >
            {info}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
