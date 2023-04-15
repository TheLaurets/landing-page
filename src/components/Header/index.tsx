'use client';

import { FacebookLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';
import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import cx from 'classnames';

export const Header = () => {

    const [open, setIsOpen] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setIsOpen(false);
            } else {
                // if scroll up show the navbar
                setIsOpen(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [controlNavbar]);

    return (
        //TODO - Add efects in scroll and add a menu button for mobile
        open ?
            <header className={cx(
                "w-screen flex flex-row justify-evenly px-10 items-center py-3 z-30 fixed",
                open && "backdrop-blur-xl shadow-xl animate-[slideTop_0.2s_ease-in-out]",
                lastScrollY <= 5 && "shadow-none"
            )}>
                <ol className="flex flex-row items-center text-primary max-sm:hidden list-none">
                    <li className="mx-4">
                        <a
                            className="text-white hover:text-primary text-1xl"
                            href="#Home"
                        >
                            Página Inicial</a>
                    </li>
                    <li className="mx-4">
                        <a
                            className="text-white hover:text-primary"
                            href="#product"
                        >
                            Produto</a>
                    </li>
                    <li className="mx-5">
                        <a
                            className="text-white hover:text-primary"
                            href="#pricing"
                        >
                            Valores
                        </a>
                    </li>
                    <li className="mx-4">
                        <a
                            className="text-white hover:text-primary"
                            href="#about"
                        >
                            Sobre
                        </a>
                    </li>
                    <li className="mx-4">
                        <a
                            className="text-white hover:text-primary"
                            href="#contact"
                        >
                            Contato
                        </a>
                    </li>
                </ol>
                <div className="flex flex-row items-center">
                    < Link
                        href="/"
                        className='mx-2'
                    >
                        <TwitterLogo
                            size={20}
                            weight="fill"
                            color='white'
                        />
                    </Link >
                    < Link
                        href="/"
                        className='mx-2'
                    >
                        <FacebookLogo
                            size={20}
                            weight="fill"
                            color='white'
                        />
                    </Link >
                    < Link
                        href="/"
                        className='mx-2'
                    >
                        <LinkedinLogo
                            size={20}
                            weight="fill"
                            color='white'
                        />
                    </Link >
                </div>
            </header >
            : null
    );
};

