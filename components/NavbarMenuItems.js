import {useScroll} from './scroll-context'

const NavbarMenuItems = () => {
  const {handleAbout, handleHow} = useScroll()
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a
            onClick={handleAbout}
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            About
          </a>
          {/* <a
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            What
          </a>
          <a
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            Why
          </a> */}
          <a
            onClick={handleHow}
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            How
          </a>
          <button className="bg-transparent hover:bg-green-600  font-semibold text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Contact
          </button>
        </div>
      </div>
    </>
  )
}
export default NavbarMenuItems
