import React, { useState, Fragment } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons.jsx'
import { Dialog, DialogPanel, Transition} from '@headlessui/react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import FirstProject from '../Projects/FirstProject.jsx'
import SecondProject from '../Projects/SecondProject.jsx'
import ThirdProject from '../Projects/ThirdProject.jsx'
import FullFirstProject from '../Projects/FullFirstProject.jsx'
import FullSecondProject from '../Projects/FullSecondProject.jsx'
import FullThirdProject from '../Projects/FullThirdProject.jsx'
import "./css/Modal.css"
import "../App/App.css";

const EmblaCarouselProjects = (props) => {
  const options = props.options;
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedPage, setSelectedPage] = useState(null)
  const [isImage, setIsImage] = useState(null);  
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  
  return (
    <div>
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {props.pages.map((page) => (
            <div className="embla__slide" key={page.id} onClick={() => {
              setSelectedPage(page);
              if (typeof page.preview === "string") setIsImage(true);
            }}>
              <div className="embla__slide__number">{typeof page.preview === 'string' ?(
             <img src = {page.preview} alt={page.preview.title}/>
              ):(page.preview)
              }</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
    <Transition
      show={selectedPage !== null}
      appear={true}
      enter="ease-out duration-400 easy-out"
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave="ease-in duration-300 easy-in"
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      className='gallery-modal'>
        <Dialog 
          open={selectedPage !== null}
          onClose={() => setSelectedPage(null)}>
              /*Фон затемнения
              <Transition.Child
                as="div"
                enter="ease-out duration-300 easy-out"
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave="tramslation duration-200 easy-in" 
                leaveFrom='opacity-100'
                leaveTo='opacity-0 scale-95 translate-y-8' />
              <Transition.Child
                as="div"
                enter="ease-out duration-500 easy-out"
                enterFrom='opacity-0 scale-95 translate-y-12'
                enterTo='opacity-100 scale-100 translate-y-0'
                leave="ease-in duration-300 easy-in" 
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95 translate-y-8'>
                  <div className='gallery-modal-overlay'>
                    <Dialog.Panel className="gallery-modal-content">
                      <button
                        onClick={() => setSelectedPage(null)}
                        className='gallery-modal-close'
                        aria-label="Закрыть">
                          X
                      </button>
                      <div className='gallery-modal-header'>
                        <Dialog.Title className="gallery-modal-title">
                          {selectedPage?.title}
                        </Dialog.Title>
                      </div>
                      {isImage?(
                        <img
                          src={selectedPage?.full}
                          alt={selectedPage?.title}
                        />
                      ) : (
                      <div className='gallery-modal-body'>
                          {selectedPage?.full}
                        </div>
                      )}
                    </Dialog.Panel>
                  </div>
              </Transition.Child>           
        </Dialog>
    </Transition>
    </div>
  )
}

export default EmblaCarouselProjects