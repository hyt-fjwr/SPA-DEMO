import React from 'react'

const Home = () => {
  return (
    <>
    <body className='scrolllbar scrollbar-thumb-slate-300'>
    <section className="text-gray-700" id="home">
            <div className="flex container mx-auto py-10 px-5 flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex-grow mb-10 lg:pr-24 md:pr-16 text-center md:text-left">
                <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi!
                <br />
                I'm Hayato Fujiwara
                <br />
                Web Developer
                </h1>
                <p className='mb-8 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda blanditiis voluptatem? Maxime a ea nobis soluta, unde eligendi amet.
                </p>
                <button className='text-white bg-blue-500 py-2 px-6 border-0 rounded text-lg hover:bg-blue-600 duration-200'>Contact</button>
            </div>
            <div className="md:w-1/2 lg:max-w-lg w-5/6">
                <img src="./img/icon.jpg" alt="" />
            </div>
            </div>
        </section>

        <section className='text-gray-700 border-t border-gray-200'>
            <div className='container px-5 py-16 mx-auto'>
            <div className='text-center mb-20'>
                <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
                <p className="pb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quis id, excepturi reiciendis labore hic quibusdam aspernatur laudantium ut doloribus?
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, corporis. Vitae ea vel, nostrum id ad cum aliquid harum suscipit dicta! Saepe maiores aspernatur at animi reprehenderit dolorem, inventore, id enim veritatis dolor neque sint iusto sed nihil eaque porro odio aliquam reiciendis? Veritatis accusantium ea laborum repellat quisquam mollitia blanditiis, ut, illo vel sint possimus voluptatum voluptate atque reprehenderit tenetur veniam ab dolores harum beatae error aut consectetur accusamus quae voluptas. Quod quae voluptatibus pariatur maxime libero est quis ad dolores praesentium sint excepturi modi vitae assumenda, non minima, harum natus inventore optio repudiandae earum ducimus voluptatum? Quia, voluptas!
                </p>
            </div>

            {/* {card section} */}
            <div className='flex flex-wrap'>
                <div className='md:w-1/3 p-3'>
                <div className='bg-gray-100 rounded-lg p-8'>
                    <div className='flex items-center mb-3'>
                    <div className='bg-blue-500 text-white rounded-full'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9513 15.571C17.7695 17.2187 16.9205 18.6654 15.6805 19.635C15.332 20.4692 14.7092 21.1601 13.9247 21.5951C13.7025 22.4574 12.9196 23.0944 11.9879 23.0944C11.0562 23.0944 10.2733 22.4574 10.0511 21.5951C9.26672 21.1602 8.64392 20.4693 8.29547 19.6353C7.05955 18.6691 6.21203 17.229 6.02621 15.5883C4.93527 16.4161 3.37955 16.4118 2.28618 15.4944C1.01696 14.4294 0.851409 12.5371 1.91641 11.2679L6.00966 6.38975C6.27125 3.31753 8.84785 0.905579 11.9878 0.905579C15.1166 0.905579 17.6861 3.30046 17.9631 6.35711L22.0837 11.2679C23.1487 12.5371 22.9831 14.4294 21.7139 15.4944C20.613 16.4182 19.0433 16.4161 17.9513 15.571ZM15.6254 12.9056L13.9472 10.9056H10.0529L8.37467 12.9056H15.6254ZM17.9878 12.6095L19.0195 13.839C19.3745 14.2621 20.0053 14.3173 20.4283 13.9623C20.8514 13.6073 20.9066 12.9765 20.5516 12.5535L17.9878 9.49803V12.6095ZM15.9878 8.90558V6.90558C15.9878 4.69644 14.1969 2.90558 11.9878 2.90558C9.77865 2.90558 7.98779 4.69644 7.98779 6.90558V8.90558H15.9878ZM4.98059 13.839L5.98779 12.6387V9.52726L3.4485 12.5535C3.0935 12.9765 3.14869 13.6073 3.57176 13.9623C3.99483 14.3173 4.62559 14.2621 4.98059 13.839ZM11.9878 18.9056C9.77865 18.9056 7.98779 17.1147 7.98779 14.9056H15.9878C15.9878 17.1147 14.1969 18.9056 11.9878 18.9056Z" fill="currentColor" /></svg>
                    </div>
                    <h2 className='text-gray-900 text-lg font-medium ml-2'>
                        Web Developer
                    </h2>
                    </div>
                    <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error perferendis quisquam, blanditiis quae atque praesentium voluptatum non est mollitia sed.</p>
                    <a href="#" className='flex mt-3 text-blue-500 items-center'>
                        See more
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
                    </a>
                    </div>
                </div>
                </div>
                <div className='md:w-1/3 p-3'>
                <div className='bg-gray-100 rounded-lg p-8'>
                    <div className='flex items-center mb-3'>
                    <div className='bg-blue-500 text-white rounded-full'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9513 15.571C17.7695 17.2187 16.9205 18.6654 15.6805 19.635C15.332 20.4692 14.7092 21.1601 13.9247 21.5951C13.7025 22.4574 12.9196 23.0944 11.9879 23.0944C11.0562 23.0944 10.2733 22.4574 10.0511 21.5951C9.26672 21.1602 8.64392 20.4693 8.29547 19.6353C7.05955 18.6691 6.21203 17.229 6.02621 15.5883C4.93527 16.4161 3.37955 16.4118 2.28618 15.4944C1.01696 14.4294 0.851409 12.5371 1.91641 11.2679L6.00966 6.38975C6.27125 3.31753 8.84785 0.905579 11.9878 0.905579C15.1166 0.905579 17.6861 3.30046 17.9631 6.35711L22.0837 11.2679C23.1487 12.5371 22.9831 14.4294 21.7139 15.4944C20.613 16.4182 19.0433 16.4161 17.9513 15.571ZM15.6254 12.9056L13.9472 10.9056H10.0529L8.37467 12.9056H15.6254ZM17.9878 12.6095L19.0195 13.839C19.3745 14.2621 20.0053 14.3173 20.4283 13.9623C20.8514 13.6073 20.9066 12.9765 20.5516 12.5535L17.9878 9.49803V12.6095ZM15.9878 8.90558V6.90558C15.9878 4.69644 14.1969 2.90558 11.9878 2.90558C9.77865 2.90558 7.98779 4.69644 7.98779 6.90558V8.90558H15.9878ZM4.98059 13.839L5.98779 12.6387V9.52726L3.4485 12.5535C3.0935 12.9765 3.14869 13.6073 3.57176 13.9623C3.99483 14.3173 4.62559 14.2621 4.98059 13.839ZM11.9878 18.9056C9.77865 18.9056 7.98779 17.1147 7.98779 14.9056H15.9878C15.9878 17.1147 14.1969 18.9056 11.9878 18.9056Z" fill="currentColor" /></svg>
                    </div>
                    <h2 className='text-gray-900 text-lg font-medium ml-2'>
                        Web Developer
                    </h2>
                    </div>
                    <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error perferendis quisquam, blanditiis quae atque praesentium voluptatum non est mollitia sed.</p>
                    <a href="#" className='flex mt-3 text-blue-500 items-center'>
                        See more
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
                    </a>
                    </div>
                </div>
                </div>
                <div className='md:w-1/3 p-3'>
                <div className='bg-gray-100 rounded-lg p-8'>
                    <div className='flex items-center mb-3'>
                    <div className='bg-blue-500 text-white rounded-full'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9513 15.571C17.7695 17.2187 16.9205 18.6654 15.6805 19.635C15.332 20.4692 14.7092 21.1601 13.9247 21.5951C13.7025 22.4574 12.9196 23.0944 11.9879 23.0944C11.0562 23.0944 10.2733 22.4574 10.0511 21.5951C9.26672 21.1602 8.64392 20.4693 8.29547 19.6353C7.05955 18.6691 6.21203 17.229 6.02621 15.5883C4.93527 16.4161 3.37955 16.4118 2.28618 15.4944C1.01696 14.4294 0.851409 12.5371 1.91641 11.2679L6.00966 6.38975C6.27125 3.31753 8.84785 0.905579 11.9878 0.905579C15.1166 0.905579 17.6861 3.30046 17.9631 6.35711L22.0837 11.2679C23.1487 12.5371 22.9831 14.4294 21.7139 15.4944C20.613 16.4182 19.0433 16.4161 17.9513 15.571ZM15.6254 12.9056L13.9472 10.9056H10.0529L8.37467 12.9056H15.6254ZM17.9878 12.6095L19.0195 13.839C19.3745 14.2621 20.0053 14.3173 20.4283 13.9623C20.8514 13.6073 20.9066 12.9765 20.5516 12.5535L17.9878 9.49803V12.6095ZM15.9878 8.90558V6.90558C15.9878 4.69644 14.1969 2.90558 11.9878 2.90558C9.77865 2.90558 7.98779 4.69644 7.98779 6.90558V8.90558H15.9878ZM4.98059 13.839L5.98779 12.6387V9.52726L3.4485 12.5535C3.0935 12.9765 3.14869 13.6073 3.57176 13.9623C3.99483 14.3173 4.62559 14.2621 4.98059 13.839ZM11.9878 18.9056C9.77865 18.9056 7.98779 17.1147 7.98779 14.9056H15.9878C15.9878 17.1147 14.1969 18.9056 11.9878 18.9056Z" fill="currentColor" /></svg>
                    </div>
                    <h2 className='text-gray-900 text-lg font-medium ml-2'>
                        Web Developer
                    </h2>
                    </div>
                    <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error perferendis quisquam, blanditiis quae atque praesentium voluptatum non est mollitia sed.</p>
                    <a href="#" className='flex mt-3 text-blue-500 items-center'>
                        See more
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </body>

    </>
  )
}

export default Home
