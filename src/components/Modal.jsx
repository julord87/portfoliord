import React, { useReducer } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useModal } from '../hooks/useModal';

export default function Modal() {

  const { state, dispatch } = useModal();

  const data = state.data;

  console.log(data)

  return (
    <>
      <Transition appear show={state.modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch({ type: 'TOGGLE_MODAL' })}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {state && state.data &&
                  <Dialog.Panel className="modal relative transform overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                    <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {data.title} <span className='modal-subtitle-color'>{data.subtitle}</span>  
                    </Dialog.Title>
                    <Dialog.Title>
                      <img src={data.img} alt={data.title} className='rounded-xl shadow-lg' />
                    </Dialog.Title>
                    <Dialog.Title as="h3" className="text-gray-500 text-xs my-3 mr-2">
                      <span style={{ textAlign: 'right', display: 'block',fontWeight: 'lighter', fontStyle: 'italic'}}>* {data.description}</span>
                    </Dialog.Title>
                    <Dialog.Title as="h3" className="text-gray-600 text-sm my-5">
                      <span style={{ textAlign: 'justify', display: 'block', fontWeight: 'lighter'}}>{'>'} {data.fullDescription}</span>
                    </Dialog.Title>
                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-3 mr-4">
                      {data.videolink &&
                        <a href={data.videolink} target="_blank" rel="noopener noreferrer" style={{ float: 'right' }}>
                          <img src="/svg/youtube.svg" className="h-7 w-7 ml-2" alt={data.title} />
                        </a>
                      }
                      {data.repolink && (
                        <div>
                          <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ float: 'right' }}>
                            <img src="/svg/link.svg" className="h-7 w-7 ml-2 hover:cursor-pointer" alt={`${data.title} link`} />
                          </a>
                          <a href={data.repolink} target="_blank" rel="noopener noreferrer" style={{ float: 'right' }}>
                            <img src="/svg/github.svg" className="h-7 w-7 ml-2 hover:cursor-pointer" alt={`${data.title} repository`} />
                          </a>
                        </div>
                      )}
                    </Dialog.Title>
                  </Dialog.Panel>
                
                }

              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
