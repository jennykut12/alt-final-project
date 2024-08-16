'use client';
import { useEffect } from 'react';
import { Button, Input, Pagination } from 'react-daisyui';
import { IoIosClose } from 'react-icons/io';
import CardUI from './ui/card/card-ui';
import { Paginate } from './ui/pagination/paginate';
import DropdownMenu from './ui/dropdown/dropdown';
import { useFetchData } from './hook/use-fetch-data';

export default function Home() {
  const {
    fetchData,
    state,
    type,
    data,
    pageCount,
    itemOffset,
    itemsPerPage,
    currentItems,
    handlePageClick,
    handleSelected,
    handleRemoveSelected,
    clearSelected,
    selected,
  } = useFetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10 lg:p-12">
      <div className="z-10 w-full  items-center text-sm lg:flex lg:flex-col lg:gap-16">
        <h6 className="text-5xl lg:text-[70px] font-extrabold">
          Explore our <span className="font-semibold">provider network</span>
        </h6>

        <div className="flex flex-row justify-evenly gap-4 w-full">
          <DropdownMenu
            data={state}
            title="All states"
            onSelect={(value) => handleSelected(value)}
          />
          <DropdownMenu
            data={type}
            title="All service providers"
            onSelect={(value) => handleSelected(value)}
          />

          <Input
            className=" w-1/2 h-[60px] text-[18px] font-normal rounded-3xl"
            placeholder="Search by provider name"
          />

          <Button
            color="primary"
            className="text-white text-[18px] rounded-3xl px-10 items-center h-[60px] align-middle"
          >
            Search
          </Button>
        </div>
        <div className="flex flex-row justify-start gap-6 w-full -mt-6 text-[16px] align-middle items-center">
          Showing {data.length} Providers for
          {selected.length === 0 ? (
            <div className="flex flex-row gap-2">
              <div className="bg-slate-200 p-3 flex flex-row gap-2 justify-between items-center">
                All States
              </div>
              <div className="bg-slate-200 p-3 flex flex-row gap-2 justify-between items-center">
                All Providers
              </div>
            </div>
          ) : (
            selected.map((info, index) => (
              <div
                key={index}
                className="bg-slate-200 p-3 flex flex-row gap-2 justify-between items-center"
              >
                {info}
                <IoIosClose
                  size={18}
                  onClick={() => handleRemoveSelected(info)}
                />
              </div>
            ))
          )}
          <a
            className="text-primary underline cursor-pointer"
            onClick={clearSelected}
          >
            Clear
          </a>
        </div>
      </div>
      <div className=" w-screen max-w-full grid grid-cols-4 grid-flow-row gap-1">
        {currentItems.map((info, index) => (
          <CardUI
            type={info.type.name}
            name={info.name}
            address={info.address}
            phone={info.phone_number}
            key={index}
          />
        ))}
      </div>
      <div>
        <Pagination>
          <Paginate
            totalPages={pageCount}
            currentPage={itemOffset}
            onPageChange={(page: number) => handlePageClick(page)}
          />
        </Pagination>
      </div>
    </main>
  );
}
