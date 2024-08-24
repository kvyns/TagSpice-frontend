import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../feature/login/loginSlice'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
    const user = useSelector(state => state.userData)
    const login = user.success
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = ()=>{
      // navigate("/")
      dispatch(loginUser({}))
    }
  return (
    <>
        <div className='absolute bg-opacity-50 min-w-full top-0'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex flex-row justify-between p-2 gap-3 items-center'>
                    <div className='text-indigo-600 font-bold text-xl'>
                        TagSpice
                    </div>
                    {login? <div>
                        <button className='mx-3 rounded-md bg-indigo-600 hover:bg-indigo-500 duration-300 text-white p-2 w-20 text-center'
                        onClick={handleLogout}>Log out</button>
                        <button className='rounded-full border-2 box border-indigo-600 hover:bg-indigo-600 hover:text-white duration-300 text-indigo-600 p-2 text-center'
                        onClick={()=>console.log(user)}>pfp</button>
                    </div> :
                    <div>
                        <button className='mx-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white duration-300 p-2 w-20 text-center'
                        onClick={()=>navigate("/signup")}>Sign up</button>
                        <button className='rounded-md border-2 box border-indigo-600 hover:bg-indigo-600 hover:text-white duration-300 text-indigo-600 p-2 w-20 text-center'
                        onClick={()=>navigate("/signin")}>Login</button>
                    </div>}
                    
                </div>
            </div>
        </div>
    </>
  )
}
