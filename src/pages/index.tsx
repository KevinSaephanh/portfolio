import * as React from 'react';
import type { NextPage } from 'next';
import { SearchButton } from '../components/ui/Buttons/SearchButton';
import { SearchModal } from '../components/ui/Modal/SearchModal';

const Home: NextPage = () => {
  const [show, setShow] = React.useState(false);

  const handleShowModal = () => {
    setShow(true);
    console.log(show);
  };

  const handleHideModal = () => {
    setShow(false);
  };

  return (
    <div className="container flex items-center justify-between mx-auto">
      <div className="relative md:px-20 w-full sm:w-5/6 max-w-3xl">
        <h1 className="text-6xl font-bold tracking-wide pb-8 md:pb-12">Title or Welcome Here</h1>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <SearchButton
              classes="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              path="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </div>
          <input
            type="text"
            readOnly={true}
            className="pl-14 p-2.5"
            placeholder="Search tickers here"
            onClick={handleShowModal}
          />
        </div>
      </div>

      {show ? <SearchModal handleHideModal={handleHideModal} /> : null}
    </div>
  );
};

export default Home;
