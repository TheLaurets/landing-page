"use client"

import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react"

import Image from "next/image"
import Link from "next/link"
import cx from 'classnames';

interface CardProps {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    link: string;
    position?: boolean;
}

export const Card = ({
    title,
    description,
    technologies,
    image,
    github,
    link,
    position = false,
}: CardProps) => {

    return (
        <div className="w-full p-2 max-sm:w-full max-sm:mt-4 max-sm:flex-col mb-28 grid grid-cols-2  max-sm:grid-rows-none">
            {position && (
                <div className={cx(
                    "relative flex justify-center translate-x-5 z-0",
                )}>
                    <Link
                        className="bg-gradient-to-tl"
                        href="#"
                    >
                        <Image
                            width={526}
                            height={329}
                            src={image}
                            alt="Avatar"
                            /*mix-blend-multiply */
                            className="shadow-lg rounded-md bg-auto bg-no-repeat hover:brightness-105"
                        />
                    </Link>
                </div>
            )}

            <div className={cx(
                "flex flex-col w-full justify-center z-10",
                position ? " text-right -translate-x-5" : "text-left translate-x-5"
            )}>
                <p className="text-primary my-3">Featured Project</p>
                <Link
                    href="#"
                    className="text-secondary font-bold text-2xl hover:text-primary mb-5"
                >
                    {title}
                </Link>
                <div className="p-6 text-tertiary bg-quaternary rounded-sm shadow-md relative text-0.5xl hover:shadow-lg">
                    <p>{description}</p>
                </div>
                <ul className={cx(
                    "mt-6 mb-3 flex flex-row justify-evenly items-center max-sm:text-xs max-sm:grid max-sm:grid-cols-2 max-xl:grid  max-xl:grid-cols-2",
                    position ? "ml-12 " : "mr-12 "
                )}>
                    {technologies.map((technology) => (
                        <li className="text-tertiary " key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>
                <div className={cx(
                    "flex flex-row ",
                    position ? " justify-end" : "justify-start"
                )}>
                    <Link
                        href={github}
                        className="mr-3"
                        target="_blank"
                    >
                        <GithubLogo
                            size={20}
                            color="#ccd6f6"
                        />
                    </Link>
                    <Link
                        href={link}
                        className="mr-3"
                        target="_blank"
                    >
                        <ArrowSquareOut
                            size={20}
                            color="#ccd6f6"
                        />
                    </Link>
                </div>
            </div>

            {!position && (
                <div className="relative flex justify-center -translate-x-5 z-0">
                    <Link
                        className="bg-gradient-to-tl"
                        href="#"
                    >
                        <Image
                            width={526}
                            height={329}
                            src={image}
                            alt="Avatar"
                            /*mix-blend-multiply */
                            className="shadow-lg rounded-md bg-auto bg-no-repeat hover:brightness-105"
                        />
                    </Link>
                </div>
            )}
        </div>
    )
}
