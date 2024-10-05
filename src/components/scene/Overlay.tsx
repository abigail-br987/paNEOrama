import { Scroll } from "@react-three/drei";
import TitleOptions from "../panel/SmallComponents/TitleOption";
import PanelThing from "../panel/SmallComponents/PanelThing";
import { HTMLProps, useContext } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import { Md3dRotation } from "react-icons/md";
import classNames from "classnames";

const ConfirmButton = ({
    className,
    ...props
}: HTMLProps<HTMLButtonElement>) => (
    <button
        {...props}
        type="button"
        className={classNames(
            "px-3 py-2 block mx-auto mt-6 rounded-lg border bg-orange-600 max-sm:block hover:font-bold transition-all",
            className,
        )}
    >
        Let's explore!
    </button>
);

export const Overlay = () => {
    const [, updateStore] = useContext(GlobalStore);

    const handleClick = () => {
        updateStore({
            start: true,
        });
    };

    return (
        <Scroll html>
            <div className="w-screen min-h-screen flex flex-col md:flex-row p-10 justify-around items-center">
                <PanelThing className="p-10 max-w-md">
                    <TitleOptions className="text-3xl xs:text-4xl md:text-5xl flex-row flex justify-center">
                        paNEOrama <Md3dRotation className="ml-3" />
                    </TitleOptions>
                    <p className="mt-3">
                        We've finally arrived at the Milky Way, Orion Arm! Isn't the Solar
                        System fascinating?
                    </p>
                    <ConfirmButton className="lg:hidden" onClick={handleClick} />
                    <p className="animate-bounce mt-6 hidden text-lg lg:block text-orange-400">
                        Mission alert ↓ <span className="text-xs">(scroll down)</span>
                    </p>
                </PanelThing>
            </div>

            <div className="hidden w-screen md:flex min-h-screen flex-col lg:flex-row p-10 justify-evenly items-center space-y-6 lg:space-x-6 lg:space-y-0">
                <PanelThing className="hidden px-8 py-6 lg:block max-w-4xl font-mono text-xs leading-normal">
                    <h1 className="font-semibold font-sans mb-4 text-xl">
                        Transmission from a fellow galactic explorer
                    </h1>
                    <p className="my-4">Greetings, agent!</p>
                    <p>
                        I come from far beyond this star, and I must admit there is much I
                        do not yet understand about this small system, especially those
                        beings that call themselves 'humans', yes? They show an unusual
                        interest in the stars and the outer space that surrounds them.
                        Curious!
                    </p>
                    <p className="my-4">
                        Indeed, the Solar System harbors secrets I have yet to grasp. My
                        intention is most peaceful, of course.
                    </p>
                    <p className="my-4">
                        Here are some of the celestial bodies you may find.
                    </p>
                    <ul className="my-4 list-disc list-inside space-y-3">
                        <li>
                            <span className="text-orange-400 font-semibold">Planets:</span>{" "}
                            What makes these planets so special to humans? How do they
                            influence the lifeforms on Earth? Our research suggests that they
                            affect more than just gravity...
                        </li>
                        <li>
                            <span className="text-orange-400 font-semibold">
                                Near-Earth Objects (NEOs):
                            </span>{" "}
                            There are countless rocks and fragments that drift perilously
                            close to this blue planet. Some of them pose a great threat to the
                            fragile lifeforms. Are we to intervene, or simply observe?
                        </li>
                        <li>
                            <span className="text-orange-400 font-semibold">
                                Potentially Hazardous Asteroids (PHAs):
                            </span>{" "}
                            A collision with one of these asteroids could spell disaster. Are
                            humans even aware of the dangers that could befall them, or is it
                            up to us to monitor these rogue objects?
                        </li>
                        <li>
                            <span className="text-orange-400 font-semibold">Comets:</span>{" "}
                            Frozen travelers from the far reaches of this system, comets carry
                            ancient stories, perhaps even knowledge lost to time. Shall we
                            decode the messages hidden within their icy tails?
                        </li>
                    </ul>
                    <p className="my-4">
                        When your exploration is complete, report your findings back to
                        headquarters!
                    </p>
                    <p className="mt-6">Good luck, agent X'ÿlK-râ'hn.</p>
                </PanelThing>

                <PanelThing className="hidden lg:block px-8 py-6 space-y-5 max-w-lg">
                    <p>
                        Before we head back, we need to explore and learn all we can about
                        the round wonders called "Planets" and the intriguing "Near Earth
                        Objects."
                    </p>
                    <p className="font-bold">Are you excited to begin?</p>
                    <button
                        className="px-3 py-2 block mx-auto 
            animate-bounce 
            text-2xl uppercase
            rounded-lg border bg-orange-600 hover:font-bold transition-all"
                        onClick={handleClick}
                    >
                        Let’s explore!
                    </button>
                </PanelThing>
            </div>
        </Scroll>
    );
};
