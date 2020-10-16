import React, { createContext, useState } from 'react'
// Projects
import GreenIMG from '../assets/images/shots/pexels-adrien-olichon-3534806.jpg';
import RedmondIMG from '../assets/images/shots/pexels-david-underland-3795260.jpg';
import BerkeleyIMG from '../assets/images/shots/pexels-david-underland-3795260.jpg';
import CharmIMG from '../assets/images/shots/pexels-adrian-cuj-2457096.jpg';
import GemIMG from '../assets/images/shots/pexels-daria-shevtsova-1030974.jpg';
// Teams
import Team1IMG from '../assets/images/shots/pexels-dinielle-de-veyra-4195342.jpg';
import Team2IMG from '../assets/images/shots/pexels-dellon-thomas-2474307.jpg';
import Team3IMG from '../assets/images/shots/pexels-chloe-kala-1043471.jpg';
// Services SVGs
import { ReactComponent as ProjectSVG } from '../assets/images/icons/project.svg';
import { ReactComponent as PlanSVG } from '../assets/images/icons/plan.svg';
import { ReactComponent as TilesSVG } from '../assets/images/icons/tiles.svg';
import { ReactComponent as ComputerSVG } from '../assets/images/icons/computer.svg';
import { ReactComponent as ArchitectureSVG } from '../assets/images/icons/architecture.svg';

export const ContentContext = createContext();

const ContentProvider = ({ children }) => {
    const initialState = {
        name: 'EVDevCorp.',
        long_name: 'EV Development Corporation',
        full_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        meta_desc: {
            home: 'EV Development Corporation is a lorem ipsum dolor sit amet',
            about: 'We are a established construction company since 2011',
            properties: 'We have over 160+ successful projects and 76+ satisfied and loyal clients who trust us 100% for their real state projects.',
            services: 'We serve our clients from the best possible, from planning to construction.'
        },
        hotline: "8-700-350",
        email: 'inquire@evdevcorp.com',
        address: 'ESV Corporation',
        socials: {
            facebook: 'https://www.facebook.com',
            twitter: 'https://www.twitter.com',
            linkedin: 'https://www.linkedin.com'
        },
        schedule: {
            day: 'Monday - Friday',
            time: '8AM - 8PM'
        },
        services: [
            {
                id: 1,
                title: 'Planning',
                icon: <ProjectSVG/>,
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                id: 2,
                title: 'Construction',
                icon: <TilesSVG/>,
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                id: 3,
                title: 'Renovation',
                icon: <ArchitectureSVG/>,
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                id: 4,
                title: 'Creative Art',
                icon: <ComputerSVG/>,
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                id: 5,
                title: 'Architecture',
                icon: <PlanSVG/>,
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                id: 6,
                title: 'Foresight',
                icon: <PlanSVG/>,
                short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
        ],
        pending_projects: [
            {
                id: 1,
                title: 'Berkeley Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Katipunan Avenue',
                image: BerkeleyIMG
            },
            {
                id: 2,
                title: 'Charm Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Flex Avenue, Cainta',
                image: CharmIMG
            },
            {
                id: 3,
                title: 'Gem Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Pasig City',
                image: GemIMG
            }
        ],
        timeline: [
            {
                year: '2011',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                year: '2014',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            },
            {
                year: '2016',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                year: '2018',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            },
            {
                year: '2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                year: '2020',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
            },
        ],
        teams: [
            {
                name: 'John Doe',
                position: 'Technical Engineer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                image: Team1IMG,
                socials: {
                    facebook: 'www.facebook.com',
                    twitter: 'www.twitter.com',
                    linkedin: 'www.linkedin.com'
                }
            },
            {
                name: 'Van Goode',
                position: 'Technical Engineer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                image: Team2IMG,
                socials: {
                    facebook: 'www.facebook.com',
                    twitter: 'www.twitter.com',
                    linkedin: 'www.linkedin.com'
                }
            },
            {
                name: 'Will Smith',
                position: 'Technical Engineer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                image: Team3IMG,
                socials: {
                    facebook: 'www.facebook.com',
                    twitter: 'www.twitter.com',
                    linkedin: 'www.linkedin.com'
                }
            }
        ],
        projects: [
            {
                id: 1,
                title: 'Green Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Morong, Rizal',
                image: GreenIMG
            },
            {
                id: 2,
                title: 'Berkeley Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Paranaque',
                image: RedmondIMG
            },
            {
                id: 3,
                title: 'Gem Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Pasig City',
                image: GemIMG
            },
            {
                id: 4,
                title: 'Charm Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Flex Avenue, Cainta',
                image: CharmIMG
            },
            {
                id: 5,
                title: 'Green Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Morong, Rizal',
                image: GreenIMG
            },
            {
                id: 6,
                title: 'Berkeley Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Paranaque',
                image: RedmondIMG
            },
            {
                id: 7,
                title: 'Gem Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Pasig City',
                image: GemIMG
            },
            {
                id: 8,
                title: 'Charm Residences',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                address: 'Flex Avenue, Cainta',
                image: CharmIMG
            }
        ],
        testimonials: [
            {
                name: 'Mary Li',
                position: 'CEO, Green Residences',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                image: GreenIMG,
                ratings: 5
            },
            {
                name: 'James Bond',
                position: 'CEO, James Bond Corp',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                image: CharmIMG,
                ratings: 5
            },
            {
                name: 'Mary Li',
                position: 'CEO, Green Residences',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                image: GreenIMG,
                ratings: 4
            }
        ]
    }
    const [data, setData] = useState(initialState)

    return (
        <ContentContext.Provider value={{...data, setData}}>
            {children}
        </ContentContext.Provider>
    )
}

export default React.memo(ContentProvider);