import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const Header = () => {

    const handleEmailButtonClick = () => {
        window.open("https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSGMvXqtvgldmpxGszhSrjDMFhqsrksbdbQPZNCHWtjxDdvfSvzDFVtllngxbRKxCXKDFjvf", "Diseño Web")
    };
    

  return (
    <>
        <section className="spikes rounded-t-2xl border border-gray-300 lg:p-3 max-w-6xl mx-auto p-2 mx2">
            <header>
                <div className="text-3xl lg:grid lg:grid-cols-4 lg:gap-x-8 lg:items-center lg:mt-3">

                    <div className="col-span-1 w-auto py-8 pb-10 lg:mb-20 flex justify-end lg:justify-center sm: pr-6 xs:pr-0">
                        <img src="/img/profile.png" alt="Profile image" className="rounded-full shadow-2xl h-28 w-28 lg:h-40 lg:w-40 xs:mx-6" />
                    </div>

                    <div className="col-span-2 px-4 lg:p-0 font-extrabold text-5xl mb-10 md:text-5xl xl:text-6xl">
                        <h1>{'> '}julian martinez is <span className="text-gray-600">a frontend developer, a sound designer, and a technical event producer_</span></h1>
                    </div>

                    <div className="col-span-1 p-4 text-center m-10 text-gray-600 border-2 border-gray-800 rounded-lg shadow-2xl lg:mr-8 bg-green-300 max-w-96 sm:mx-auto xs:mx-6">
                        <div className="flex items-center justify-center p-3">
                            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-600" />
                        </div>
                        <p>project in mind?</p>
                        <div className="py-3">
                            <button className='mt-3' onClick={handleEmailButtonClick}>
                            <span className="button_top"> Get in touch
                            </span>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </header>
        </section>
    </>
  )
}

export default Header