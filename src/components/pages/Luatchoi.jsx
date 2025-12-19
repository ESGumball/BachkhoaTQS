import { useState } from "react";
import DATA from "../Dataluat";

const Luatchoi = () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(null);

    const handleOpen = (key) => {
        setCurrent(DATA[key]);
        setOpen(true);
    };

  return (
    <>
    <section id='Luatchoi' className='h-screen scroll-mt-20 bg-linear-to-r from-[#006699] to-sky-400'>  
        <div className='container mx-auto md:px-20 md:py-10 px-10 py-5 flex flex-col items-center gap-10'>
            {Object.keys(DATA).map((item) => (
          <button
            key={item}
            onClick={() => handleOpen(item)}
            className="border rounded-full p-3 hover:bg-white cursor-pointer hover:scale-110 transition-transform"
          >
            {item}
          </button>
        ))}
        </div>
    </section>
    {open && (
        <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="bg-linear-to-br from-gray-500 to-gray-400 rounded-xl p-6 w-full shadow-xl 
          max-w-md max-h-[90vh] overflow-auto">
            <h2 className="text-xl font-semibold mb-4 text-white">{current.title}</h2>
            <p className="text-white ">
              {current.desc}
            </p>

            <button
              className="mt-5 px-4 py-2 rounded bg-blue-600 text-white hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Luatchoi;