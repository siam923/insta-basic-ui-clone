import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function Header() {
  //data: session -> rename data to session
  const {data: session, status} = useSession();
  const router = useRouter()

  return (
    <div className='shadow-sm border-b bg-white sticky-top-0 z-50'>
      <div className=' flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* left */}
        <div onClick={() => router.push('/')} className='hidden lg:inline-grid relative w-24 cursor-pointer'>
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit='contain'
          />   
        </div>

         <div onClick={() => router.push('/')} className='relative w-10 flex-shrink-0 lg:hidden cursor-pointer'>
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit='contain'
          />  
        </div> 
                
        {/* middle */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pinter-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500'/>
            </div>
            
            <input 
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 
                focus:ring-black focus:border-black rounded-md" 
                type="text" placeholder='Search'
            />
            
          </div>
        </div>

        {/* right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push('/')} className='navBtn'/>
          <MenuIcon className='h-6 md:hidden cursor-pointer'/>
          
          {session ? (
            <>
              <div className='relative navBtn'>
              <PaperAirplaneIcon className='navBtn rotate-45'/>
              <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 
                text-white rounded-full flex items-center justify-center animate-pulse'
                >
                3
              </div>
              </div>
              <PlusCircleIcon className='navBtn'/>
              <UserGroupIcon className='navBtn'/>
              <HeartIcon className='navBtn'/>

              <img 
                onClick={signOut}
                alt="profile pic"
                className='h-10 w-10 cursor-pointer rounded-full '
                src={session.user.image} />
            </>
          ): (
            <button onClick={signIn}>Sing In</button>
          )
          }
          
        </div>
      </div>
  </div>
  );
}

export default Header;
