import Image from 'next/image';

export default function HomeMenu() {
    return (
        <section className="">
            <div className="relative flex justify-center items-center">
                {/* First Image */}
                <div className="h-32 w-32 absolute left-0 mt-20">
                    <Image 
                        src="/bag-2-product.jpg" 
                        layout="fill" 
                        alt="Beauty" 
                        objectFit="contain" 
                    />
                </div>

                {/* Second Image */}
                <div className="h-64 w-64 absolute right-0 mt-20">
                    <Image 
                        src="/sport-items.png" 
                        layout="fill" 
                        alt="Beauty" 
                        objectFit="contain" 
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="text-center mt-10">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
                <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>

            {/* Product Squares */}
            <div className="grid grid-cols-4 gap-4 py-5">
                {/* Product 1 */}
                <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/headphone.jpg" 
                        alt="headphone" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">Headphones</h4>
                    <p className="text-gray-500 text-sm mt-1">Amazing headphones</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $15
                    </button>
                </div>
                
                {/* Product 2 */}
                <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/watch.jpg" 
                        alt="watch" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">watch</h4>
                    <p className="text-gray-500 text-sm mt-1">Stylish watch</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $20
                    </button>
                </div>
                
                {/* Product 3 */}
                <div className="bg-gray-300 rounded-lg text-center p-4 ">
                    <img 
                        src="/shoes.jpg" 
                        alt="shoes" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">shoes</h4>
                    <p className="text-gray-500 text-sm mt-1">Comfortable shoes</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $25
                    </button>
                </div>
                
                {/* Product 4 */}
                <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/bag.jpg" 
                        alt="bag" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">Bag</h4>
                    <p className="text-gray-500 text-sm mt-1">Trendy bag</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $30
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 py-5">
            {/* Product 1 */}
            <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/hat.jpg" 
                        alt="headphone" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">Hat</h4>
                    <p className="text-gray-500 text-sm mt-1">Amazing hats</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $15
                    </button>
                </div>
                
                {/* Product 2 */}
                <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/bottle.jpg" 
                        alt="watch" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">bottle</h4>
                    <p className="text-gray-500 text-sm mt-1">Healthy bottles</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $20
                    </button>
                </div>
                
                {/* Product 3 */}
                <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/clothes.jpg" 
                        alt="shoes" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">clothes</h4>
                    <p className="text-gray-500 text-sm mt-1">beautiful clothes</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $25
                    </button>
                </div>
                
                {/* Product 4 */}
                <div className="bg-gray-300 rounded-lg text-center p-4">
                    <img 
                        src="/mouse.jpg" 
                        alt="bag" 
                        className="w-full h-40 object-contain rounded-md" 
                    />
                    <h4 className="text-lg font-bold mt-2">mouse</h4>
                    <p className="text-gray-500 text-sm mt-1">Usefull hardware products</p>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
                        Add to Cart $30
                    </button>
                </div>

            </div>
        </section>
    );
}
