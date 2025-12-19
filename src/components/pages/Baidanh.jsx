import cardList from "../cardList"
import { useState } from "react";

const sort = [
    {
        type: 'Cẩm nang',
    },
    {
        type: 'Cơ bản',
    },
    {
        type: 'Trang bị',
    }
]


const Baidanh = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filterType, setFilterType] = useState(null);
    const [searchText, setSearchText] = useState("");
  return (
    <>
    <section id="Baidanh" className="h-full scroll-mt-20 bg-linear-to-r from-[#006699] to-sky-400">
        <div className="container mx-auto md:px-20 md:py-10 px-10 py-5 flex flex-col items-center gap-10">
            <div>
                <input 
                type='text'
                placeholder="Nhập tên bài muốn tìm"
                className="border rounded p-2 md:w-100 w-80"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="flex md:gap-10 gap-8">
                {sort.map((card,index) => (
                    <button key={index} 
                    className={`border rounded p-2 hover:bg-white cursor-pointer
                    hover:scale-110 transition-transform duration-200
                    ${filterType === card.type ? "bg-white text-black" : "bg-transparent text-white"}`} 
                    onClick={() => setFilterType(card.type)}> {card.type} </button>
                ))}
                <button
                className={`border rounded p-2 hover:bg-white cursor-pointer
                    hover:scale-110 transition-transform duration-200
                    ${filterType === null ? "bg-white text-black" : "bg-transparent text-white"}`}
                onClick={() => setFilterType(null)}
                >
                    Tất cả
                </button>
            </div>
            <div 
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-5">
                {cardList
                .filter(card => (!filterType || card.type === filterType) && 
                card.name.toLowerCase().includes(searchText.toLowerCase())
                ) 
                .map((card,index) => (
                    <div className="flex flex-col">
                      <img 
                      key={index} src={card.image} 
                      className="border rounded-lg hover:bg-white cursor-pointer
                      hover:scale-110 transition-transform duration-200 w-full aspect-2/3 object-cover"
                      onClick={() => setSelectedImage(card)}>
                      </img>
                      <span className="text-sm text-center font-bold"> [{card.name}] </span>
                    </div>
                ))}
            </div>
        </div>
    </section>
    {selectedImage && (
  <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50">
    <div className="bg-linear-to-br from-gray-500 to-gray-400 rounded-lg max-w-4xl w-full flex-col md:flex-row flex gap-4 p-4 md:p-6
    overflow-auto relative max-h-[90vh] border-4 border-white">
      
      {/* Ảnh bên trái */}
      <div className="shrink-0 w-full md:w-96 aspect-2/3 md:my-0 my-5 outline-2 rounded-lg outline-white">
        <img
          src={selectedImage.image}
          alt={selectedImage.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Thông tin bên phải */}
      <div className="flex-1 flex flex-col justify-between relative">
        <div className="flex flex-col gap-2 text-white font-bold my-4 md:my-10">
          <div className="w-full border text-center p-2 rounded-full bg-gray-600">{selectedImage.name}</div>
          <div className="w-full border text-center p-2 rounded-full bg-gray-600">{selectedImage.type}</div>
          <div className="w-full h-full border text-center p-2 rounded-2xl bg-gray-600">{selectedImage.chucnang}</div>
        </div>

        <button
          className="absolute -top-4 right-0 md:top-2 md:right-2 
          text-white font-bold border px-4 cursor-pointer hover:bg-black rounded-full bg-gray-400"
          onClick={() => setSelectedImage(null)}
        >
          X
        </button>
      </div>

    </div>
  </div>
    )}
    </>
  );
};

export default Baidanh