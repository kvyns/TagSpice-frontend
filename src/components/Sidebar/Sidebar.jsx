import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);

    const sideBarContents = [
        {
            name:"Comments",
            icon:"o",
            href:"#"
        },
        {
            name:"Analysis",
            icon:"o",
            href:"https://www.google.com/"
        },
        {
            name:"Notifications",
            icon:"o",
            href:"#"
        },
        {
            name:"Settings",
            icon:"o",
            href:"#"
        },
        {
            name:"modgil ji ",
            icon:"o",
            href:"#"
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsExpanded(false);
            } else {
                setIsExpanded(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`fixed h-screen rounded-md shadow-sm shadow-black outline-2 outline-indigo-600 mt-16 text-white  bg-indigo-600 ${isExpanded ? 'w-64' : 'w-20'} duration-150`}>
            {isExpanded ? sideBarContents.map((item)=>{
                return <div className='flex flex-col mx-4  first:mt-10 text-lg items-start'>
                        <a href = {item.href} className='flex flex-row gap-2 content-center w-full p-4  hover:bg-indigo-500 rounded-md duration-200'>
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                {item.name}
                            </div>
                            </a>
                    </div>
            }) : sideBarContents.map((item)=>{
                return <div className='flex flex-col p-4 mx-4 mt-4  items-center hover:bg-indigo-500 rounded-md duration-200'>{item.icon}</div>})}
        </div>
    );
}

export default Sidebar;
