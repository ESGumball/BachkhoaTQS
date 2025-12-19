import  { useState } from 'react';


const navList = [
    { id: 'Baidanh', label: 'Bài đánh'},
    { id: 'Baituong', label: 'Bài tướng'},
    { id: 'Luatchoi', label: 'Luật chơi'}
]

const Header = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = (id) => {
        setActiveSection(id);    // chuyển section
        setIsMenuOpen(false);    // đóng menu mobile
    };
  return (
    <>
    <header className="bg-linear-to-r from-[#00334d] to-cyan-600 shadow-md top-0 z-50 sticky">
        <div className="container mx-auto py-4 px-4">
            <nav className="justify-center gap-50 hidden md:flex">
                {navList.map((link) => (
                    <button 
                    key={link.id}
                    onClick={() => setActiveSection(link.id)} 
                    className={`cursor-pointer border rounded 
                    hover:scale-110 transition-transform duration-200 
                    p-3 text-white hover:bg-blue-200 hover:text-black ${
                    activeSection === link.id ? ' text-blue-500' : ''
                    }`}>
                        {link.label}
                    </button>
                ))}
            </nav>
            <div className="md:hidden text-right">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <div className="text-white"> Close </div> : 
                    <div className='text-white'> Menu </div>}
                </button>
            </div>
        </div>
    </header>
    {isMenuOpen && (
        <div className='md:hidden fixed inset-0 my-14 bg-white border-t border-gray-200
        shadow-md px-4 py-4 space-y-3 font-medium h-screen'>
            {navList.map((link) => (
                <a href={link.href} key={link.href} className='block hover:text-sky-600 transition border p-2 rounded-lg'
                onClick={() => handleClick(link.id)}>
                    {link.label}
                </a>
            ))}
        </div>
    )}
    </>
  );
};

export default Header