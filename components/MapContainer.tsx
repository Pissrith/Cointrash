import React from 'react';

function MapContainer() {
  return (
    <>
      <section className='bg-gray-100 py-16'>

        <div className='container mx-auto text-center'>
          <h1 className="text-5xl font-bold text-yellow-500 mb-10">
            <span className="border-b-4 border-yellow-500 pb-2">จุดรับขยะ</span>
          </h1>
          <div className="relative w-full h-96">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/d/embed?mid=1xs6N9JCPQZ8HvVIfM0HlIyFO1I2iB-RU&ehbc=2E312F"
              frameBorder="0"
              allowFullScreen=""
              title="Google Map"
              aria-hidden="false"
              tabIndex="0"
            >
            </iframe>
          </div>
          <h2 className='text-xl font-semibold text-gray-800 pt-5'>Lorem</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi consequatur voluptas exercitationem in fuga! Maiores magni ex perspiciatis, temporibus aspernatur adipisci exercitationem voluptatibus voluptate enim, nam distinctio necessitatibus doloribus impedit quaerat voluptatem et laborum numquam excepturi laboriosam, labore sapiente nulla? Nobis fugit, enim quisquam expedita delectus cumque! Nihil, explicabo.</p>
        </div>
      </section>
    </>
  );


}

export default MapContainer;
