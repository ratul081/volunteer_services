import React from "react";

const Blogs = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
        </div>

        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div>
              <p className="mt-6 text-sm text-blue-500 uppercase">
                Want to know
              </p>
              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                What do you want to know about UI
              </h1>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Amelia. Anderson
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Design instument</h3>
              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                How to raise $100k+ by using blox ui kit on your design
              </a>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">UI Resource</h3>
              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                Should you creat UI Product by using Blox?
              </a>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">Premium Collection</h3>
              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                Top 10 Blocks you can get on Blox's collection.
              </a>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-blue-500 capitalize">Premium kits</h3>
              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                Top 10 Ui kit you can get on Blox's collection.
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                20 Nov 2020
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                    What it means when a man falls from outer space
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                Call it magical realism, call it realistic fantasy—call it
                whatever you want, but Arimah's playfully subversive style is
                wholly her own.
              </p>
              <div className="flex items-center">
                <a href="/" aria-label="Author" className="mr-3">
                  <img
                    alt="avatar"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    href="/"
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                    Petru Vîrtos
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 lg:col-span-3">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  14 Jul 2020
                </p>
                <div className="mb-3">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      Mascarpone cheese triangles taleggio
                    </p>
                  </a>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  Brie cheese triangles cheesecake. Cauliflower cheese cheese
                  and wine manchego bocconcini croque monsieur queso airedale
                  brie.
                </p>
                <div className="flex items-center">
                  <a href="/" aria-label="Author" className="mr-3">
                    <img
                      alt="avatar"
                      src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      Alex Stratulat
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  18 Mar 2020
                </p>
                <div className="mb-3">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      The quick, brown fox jumps over a lazy dog
                    </p>
                  </a>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  "A kitten, a nice little, sleek playful kitten, that I can
                  play with, and teach, and feed--and feed--and feed!" I was not
                  unprepared for this request, for I had noticed how his pets
                  went on increasing in size.
                </p>
                <div className="flex items-center">
                  <a href="/" aria-label="Author" className="mr-3">
                    <img
                      alt="avatar"
                      src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      Susie the Cat
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                All the features you want to know
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
            </div>
          </div>
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                How to use sticky note for problem solving
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
