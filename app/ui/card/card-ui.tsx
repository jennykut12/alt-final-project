import React from 'react';
import { Card } from 'react-daisyui';
import { PiBed } from 'react-icons/pi';
import { PiHospital } from 'react-icons/pi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuPhone } from 'react-icons/lu';

type Props = {
  type: string;
  name: string;
  address: string;
  phone: string;
};
const multipleNumber = (phone: string | null | undefined) => {
  if (!phone) {
    // Handle cases where phone is null or undefined
    return '';
  }

  const checkPhone = phone.split(',');
  if (checkPhone.length > 0) {
    const phoneNumbers = checkPhone.map((phone) => phone.trim());
    return phoneNumbers[0];
  } else {
    return phone;
  }
};
const CardUI = ({ type, name, address, phone }: Props) => {
  return (
    <Card normal="lg">
      <Card.Body>
        <Card.Title tag="h2">
          <PiBed color="#687ab5" size={38} />
        </Card.Title>
        <p className="text-xl font-semibold">{name}</p>
        <div className="flex flex-col">
          <div className="flex flex-row justify-start gap-3 items-center ">
            <PiHospital color="#b8b9bb" size={20} />
            <span className="text-[14px]  text-gray-500">{type} </span>
          </div>
          <div className="flex flex-row justify-start gap-3 items-center">
            <HiOutlineLocationMarker color="#b8b9bb" size={20} />
            <span className="text-[14px]  text-gray-500">{address}</span>
          </div>
          <div className="flex flex-row justify-start gap-3 items-center ">
            <LuPhone color="#b8b9bb" size={20} />
            <span className="text-[14px]  text-gray-500">
              {multipleNumber(phone)}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardUI;
