'use client';
import React from 'react';
import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';
import { IoMdArrowForward } from 'react-icons/io';
import { PiHospitalFill } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';

const NavbarHeader = () => {
  return (
    <Navbar className="px-10 lg:px-20">
      <Navbar.Start>
        <div className="flex flex-row items-center gap-2">
          <div>
            <PiHospitalFill size={25} color="#172554" />
          </div>
          <div className="normal-case font-semibold text-xl text-blue-950">
            Carefinder
          </div>
        </div>
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Menu horizontal className="px-1 font-semibold text-[16px]">
          <Menu.Item>
            <a>Health plans</a>
          </Menu.Item>
          <Menu.Item>
            <a>Providers</a>
          </Menu.Item>
          <Menu.Item>
            <a> Technology</a>
          </Menu.Item>
          <Menu.Item>
            <a>About</a>
          </Menu.Item>
          <Menu.Item>
            <a>Resources</a>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <Dropdown>
          <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
            <MdMenu size={25} />
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
            <Dropdown.Item>Health plan</Dropdown.Item>

            <Dropdown.Item>Providers</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="hidden lg:block">
          <Button
            tag="a"
            color="primary"
            size="lg"
            className="text-white rounded-3xl"
            endIcon={<IoMdArrowForward color="white" />}
          >
            Contact
          </Button>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default NavbarHeader;
