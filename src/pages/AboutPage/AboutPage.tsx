import { Button } from '../../components/Button/Button.tsx';
import { Link } from 'react-router-dom';
function Index() {
  return (
    <div className="pb-12 overflow-y-hidden" style={{ minHeight: 700 }}>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Your
              <span className="text-gray-500"> Personal </span>
              Account
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              You can easily manage and track your orders
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/applications" style={{ width: 300, height: 300 }}>
              <Button text={'Check applications'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
