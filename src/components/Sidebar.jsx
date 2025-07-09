import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user)

  const handleClick = (label) => {
    switch (label) {
      case 'Home':
        navigate('/home')
        break
      case 'Profile':
        navigate('/profile')
        break
      case 'New':
        navigate('/new')
        break
      case 'Search':
      navigate('/search')
      break
      default:
        break
    }
  }

  const menuItems = [
    {
      icon: (
        <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.7 0.904491L21.7 10.7059C21.8919 10.894 22 11.1514 22 11.4201V23.4997C22 23.7758 21.7761 23.9997 21.5 23.9997H14.5C14.2239 23.9997 14 23.7758 14 23.4997V18C14 16.4023 12.7511 15.0963 11.1763 15.0051L11 15C9.40232 15 8.09634 16.2489 8.00509 17.8237L8 18V23.4997C7.99998 23.7758 7.77613 23.9996 7.5 23.9997L0.5 24C0.25454 24 0.0503841 23.8231 0.00803813 23.5899L0 23.5V11.4201C0 11.1514 0.108129 10.894 0.300019 10.7059L10.3 0.904491C10.6889 0.523373 11.3111 0.523373 11.7 0.904491Z" fill="#262626"/>
        </svg>
      ),
      label: 'Home'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.75 10C19.75 4.61522 15.3848 0.25 10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C12.4226 19.75 14.6388 18.8664 16.344 17.404L22.3336 23.3943L22.4177 23.4669C22.7114 23.6848 23.128 23.6606 23.3943 23.3943C23.6872 23.1014 23.6872 22.6265 23.3943 22.3336L17.404 16.344C18.8664 14.6388 19.75 12.4226 19.75 10ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10Z" fill="#262626"/>
        </svg>
      ),
      label: 'Search'
    },
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17 0.25C20.7279 0.25 23.75 3.27208 23.75 7V17C23.75 20.7279 20.7279 23.75 17 23.75H7C3.27208 23.75 0.25 20.7279 0.25 17V7C0.25 3.27208 3.27208 0.25 7 0.25H17ZM17 1.75H7C4.10051 1.75 1.75 4.10051 1.75 7V17C1.75 19.8995 4.10051 22.25 7 22.25H17C19.8995 22.25 22.25 19.8995 22.25 17V7C22.25 4.10051 19.8995 1.75 17 1.75ZM12.7432 5.89823C12.6935 5.53215 12.3797 5.25 12 5.25L11.8982 5.25685L11.8006 5.27679C11.4832 5.36411 11.25 5.65482 11.25 6V11.249L6 11.25L5.89823 11.2568C5.53215 11.3065 5.25 11.6203 5.25 12L5.25685 12.1018C5.30651 12.4678 5.6203 12.75 6 12.75L11.25 12.749V18L11.2568 18.1018C11.3065 18.4678 11.6203 18.75 12 18.75L12.1018 18.7432C12.4678 18.6935 12.75 18.3797 12.75 18V12.75H18L18.1018 12.7432C18.4678 12.6935 18.75 12.3797 18.75 12L18.7432 11.8982C18.6935 11.5322 18.3797 11.25 18 11.25H12.75V6L12.7432 5.89823Z" fill="#262626"/>
        </svg>
      ),
      label: 'New'
    },
    {
      icon: (
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.8725 2.65511L11.2175 1.88951C8.58142 -0.746533 4.37761 -0.5669 1.74157 2.06914C-0.894471 4.70518 -0.387159 9.80151 2.24888 12.4375C3.31874 13.5074 4.92092 14.9887 7.05542 16.8815L8.85115 18.4612L10.8681 20.212C11.4234 20.6913 12.2439 20.6986 12.8077 20.2293L14.4416 18.8594C17.3029 16.4413 19.4262 14.5366 20.8115 13.1454L21.171 12.7788L21.4939 12.4375C23.9489 9.79014 24.5798 4.64387 22.005 2.06914L21.8185 1.88951C19.1711 -0.565474 15.179 -0.685229 12.6042 1.88951L11.8725 2.65511ZM2.80223 3.1298C4.88666 1.04537 8.11137 0.947647 10.118 2.91183L11.8111 4.89048L13.6886 2.92588C15.6145 1.00055 18.6838 1.02838 20.7986 2.98939L20.9645 3.14958C22.7839 4.96937 22.4744 9.17411 20.394 11.4176L20.0815 11.7477L19.7348 12.1012C18.5864 13.2537 16.8845 14.7978 14.6405 16.7208L13.4734 17.7138L11.8481 19.0764L9.83442 17.3285L8.39319 16.0625C6.36239 14.2676 4.79575 12.832 3.69885 11.7613L3.30954 11.3769C1.138 9.20535 0.866398 5.06563 2.80223 3.1298Z" fill="#262626"/>
        </svg>
      ),
      label: 'Likes'
    },
    {
      icon: (
        <img
          src={currentUser?.avatar || '/default-avatar.jpg'}
          alt="profile"
          className="w-6 h-6 rounded-full object-cover"
        />
      ),
      label: 'Profile'
    }
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-between items-center px-6 py-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center text-gray-700 hover:text-black"
            title={item.label}
            onClick={() => handleClick(item.label)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
