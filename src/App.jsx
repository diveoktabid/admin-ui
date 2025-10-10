import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">LATIHAN 1</div>
        <nav className="bg-gray-100 p-4 flex flex-col md:flex-row md:justify-between md:items-center border-b">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-4 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">LATIHAN 3</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center max-w-md md:max-w-none mx-auto md:mx-0">
            {/* Basic Package */}
            <div className="bg-gray-200 p-4 text-center h-20 md:h-22 flex flex-col justify-center rounded-lg">
              <div className="font-medium text-sm">Basic</div>
              <div className="text-xs mt-1">Rp 50.000</div>
            </div>
            
            {/* Pro Package - Highlighted and Bigger */}
            <div className="bg-blue-300 p-4 text-center h-20 md:h-24 flex flex-col justify-center rounded-lg">
              <div className="font-medium text-sm">Pro</div>
              <div className="text-xs mt-1">Rp 100.000</div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-gray-200 p-4 text-center h-20 md:h-22 flex flex-col justify-center rounded-lg">
              <div className="font-medium text-sm">Premium</div>
              <div className="text-xs mt-1">Rp 200.000</div>
            </div>
          </div>
        </div>
        
         {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-screen">
          <header className="bg-gray-300 p-6 col-span-full">
            <h2 className="text-gray-700">Header</h2>
          </header>
          <aside className="bg-gray-200 p-6 md:col-span-3">
            <h3 className="text-gray-700">Sidebar</h3>
          </aside>
          <main className="bg-white p-6 border border-gray-400 md:col-span-9">
            <h3 className="text-gray-700">Content</h3>
          </main>
          <footer className="bg-gray-300 p-6 col-span-full">
            <h2 className="text-gray-700">Footer</h2>
          </footer>
        </div>
        <hr />
        
        </div>        {/* LATIHAN 5 - CARD PRODUCT */}
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">LATIHAN 5</div>
          <div className="border border-gray-300 p-6 flex flex-col md:flex-row md:items-start gap-4 w-full">
            <div className="bg-gray-300 w-20 h-20 flex-shrink-0 flex items-center justify-center text-xs text-gray-500 mx-auto md:mx-0">
              80 × 80
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-bold text-lg mb-1">Nama Produk</h3>
              <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
