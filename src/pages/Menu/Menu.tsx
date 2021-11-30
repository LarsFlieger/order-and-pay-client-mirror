import { Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';
import { Head } from '../../components/MenuComponents/Head';
import MenuComponent from '../../components/MenuComponents/MenuComponent';
import { OrderButton } from '../../components/MenuComponents/OrderButton';
import { ScrollCats } from '../../components/MenuComponents/ScrollCats';
import { useScrollToNav } from '../../hooks/useScroll';

export const Menu: React.FunctionComponent = () => {


    const [containerRef, isVisible] = useScrollToNav({
        root: null,
        rootMargin: "0px"
    })

    const MenuRef = useRef()

    const scroll = (index: number) => {
        //@ts-ignore
        MenuRef.current.handleClick(index)
    }

    return (

        <div id="page" className="container flex grid grid-rows-7 grid-cols-1 border-solid table-auto">
            {/*@ts-ignore*/}
            <Transition show={!isVisible}
                enter="transition ease-out duration-1"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed top-0 bg-white"><ScrollCats scrollFC={scroll} /></div></Transition>
            <div>
                {/*@ts-ignore */}
                <div ref={containerRef} ><Head scrollFC={scroll} /></div>
                <div id="menuComponent" className="flex-auto overflow-y-auto pb-96" ><MenuComponent ref={MenuRef} /></div>
            </div>

            <footer onClick={() => { }} className="flex-grow fixed bottom-0 w-full"><OrderButton /></footer>

        </div>
    )
}

