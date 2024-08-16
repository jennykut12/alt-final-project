'use client';
import React from 'react';
import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';
import { CgProfile } from 'react-icons/cg';
import { LuPhone } from 'react-icons/lu';

const TopNavbarHeader = () => {
  return (
    <Navbar className=" bg-blue-950 px-10 text-cyan-50 lg:px-20">
      <Navbar.Start>
        <Dropdown>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="flex flex-row justify-between gap-10">
          <div>Nigeria</div>
          <div className="gap-2 hidden lg:flex lg:flex-row items-center">
            <div>
              <LuPhone size={25} />
            </div>
            <div>0700-Carefinder</div>
          </div>
        </div>
      </Navbar.Start>
      <Navbar.Center className="block lg:hidden">
        <div className="gap-2 flex flex-row items-center">
          <div>
            <LuPhone size={25} />
          </div>
          <div>0700-Carefinder</div>
        </div>
      </Navbar.Center>

      <Navbar.End className="flex lg:flex-row gap-2">
        <div>
          <CgProfile color="white" size={25} />
        </div>
        <div className="hidden lg:block">Login</div>
      </Navbar.End>
    </Navbar>
  );
};

export default TopNavbarHeader;
