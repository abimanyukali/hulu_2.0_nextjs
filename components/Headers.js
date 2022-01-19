import React from 'react'
import Headeritem from './Headeritem'
import {HomeIcon,
LightningBoltIcon,BadgeCheckIcon,CollectionIcon,SearchIcon, UserIcon} from "@heroicons/react/outline";
import Image from "next/image"
const Headers = () => {
    return (
       <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
           <div className="flex flex-grow fustify-evently max-w-2xl">
           <Headeritem title="HOME" Icon={HomeIcon}/>
           <Headeritem title="TRENDING" Icon={LightningBoltIcon}/>
           <Headeritem title="VERIFIED" Icon={BadgeCheckIcon}/>
           <Headeritem title="COLLECTIONS" Icon={CollectionIcon}/>
           <Headeritem title="SEARCH" Icon={SearchIcon}/>
           <Headeritem title="ACCOUNT" Icon={UserIcon}/>
           </div>
           <Image src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="image"
           width={200}
           height={100}/>
       </header>  
    )
}

export default Headers
