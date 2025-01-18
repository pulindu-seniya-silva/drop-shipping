import Right from '../icons/Right';

export default function Hero() {
  return (
    <section className="hero grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-4 md:px-8" >
      <div className="max-w-lg -ml-8 py-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Stand out from the crowd</h1>
        <p className="my-4 text-gray-500 text-sm my-6">
          Find your unique path to fitness with world-class health and wellness gear at <span className="text-primary">ClickShop Express</span>. 
        </p>
        <div className="flex flex-wrap gap-4 mt-3  text-sm ">
          <button className="bg-primary flex items-center gap-2 text-white px-6 py-2 rounded-full -ml-1 uppercase items-center">
            Shop Now
            <Right />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative w-full  flex justify-center md:justify-end">
        <img
          src="https://th.bing.com/th/id/R.32374c11d11279e59a5267b624275606?rik=4H%2b%2b%2bA3Rmtu20A&riu=http%3a%2f%2feblogfa.com%2fwp-content%2fuploads%2f2014%2f03%2fphone-android-smartphone.jpg&ehk=F6ewY%2flAunyVkaAFxOwdumdFIbnV%2bR9KSfN%2bW6Vedpc%3d&risl=&pid=ImgRaw&r=0"
          alt="Phone"
          className="w-43 h-44 object-contain"
        />
      </div>
    </section>
  );
}
