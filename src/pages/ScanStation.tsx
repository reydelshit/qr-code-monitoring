const ScanStation = () => {
  return (
    <div className="relative h-full">
      <h1 className="my-4 text-6xl font-bold">Scan Station</h1>

      <div className="mb-2 mt-[2rem] grid grid-cols-4 gap-2">
        <div className="flex h-[10rem] w-[18rem] cursor-pointer flex-col justify-between rounded-2xl border-[1px] border-green-500 p-4">
          <h1 className="text-xl font-semibold text-green-500">
            PSITS EVENT REGISTRATION
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm">August 14, 2024</p>

            <p className="text-sm font-thin">
              <span className="text-[2rem] font-bold">5</span> entries{' '}
            </p>
          </div>
        </div>
        <div className="flex h-[10rem] w-[18rem] cursor-pointer flex-col justify-between rounded-2xl border-[1px] border-yellow-500 p-4">
          <h1 className="text-xl font-semibold text-yellow-500">
            MORNING ATTENDANCE 8AM - 12PM
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm">August 14, 2024</p>

            <p className="text-sm font-thin">
              <span className="text-[2rem] font-bold">5</span> entries{' '}
            </p>
          </div>
        </div>{' '}
        <div className="flex h-[10rem] w-[18rem] cursor-pointer flex-col justify-between rounded-2xl border-[1px] border-red-500 p-4">
          <h1 className="text-xl font-semibold text-red-500">
            MORNING ATTENDANCE 8AM - 12PM
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm">August 14, 2024</p>

            <p className="text-sm font-thin">
              <span className="text-[2rem] font-bold">5</span> entries{' '}
            </p>
          </div>
        </div>
        <div className="flex h-[10rem] w-[18rem] cursor-pointer flex-col justify-between rounded-2xl border-[1px] border-green-500 p-4">
          <h1 className="text-xl font-semibold text-green-500">
            MORNING ATTENDANCE 8AM - 12PM
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm">August 14, 2024</p>

            <p className="text-sm font-thin">
              <span className="text-[2rem] font-bold">5</span> entries{' '}
            </p>
          </div>
        </div>
        <div className="flex h-[10rem] w-[18rem] cursor-pointer flex-col items-center justify-center rounded-2xl border-[1px] border-dashed border-gray-500 text-8xl font-thin hover:bg-gray-100">
          <span className="mt-[-1rem]"> +</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 w-[8rem]">
        <h1 className="rounded-md border-[1px] bg-yellow-500 p-2 text-center text-white">
          ONGOING
        </h1>
        <h1 className="rounded-md border-[1px] bg-green-500 p-2 text-center text-white">
          COMPLETED
        </h1>
        <h1 className="rounded-md border-[1px] bg-red-500 p-2 text-center text-white">
          CANCELLED
        </h1>
      </div>
    </div>
  );
};

export default ScanStation;
