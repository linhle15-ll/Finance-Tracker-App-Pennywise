import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faBriefcase, faCoins, faMugSaucer, faCompass, faMusic, faBook, faFile, faShop, faInstagram } from '@fortawesome/free-solid-svg-icons'
import { LayoutDashboard, PiggyBank, HandCoins, LogOut, NotebookText, Trash2, Search, CirclePlus } from 'lucide-react'


export const Dashboard =  <LayoutDashboard size={28} color="white" />
export const Budget = <PiggyBank size={28} color="white" />
export const Income =  <HandCoins size={28} color="white" />
export const Expense =  <NotebookText size={28} color="white" />
export const Delete = <Trash2 size={20} color="red" strokeWidth={1.5} />
export const SearchIcon = <Search size={28} color="#02403E" />
export const Logout = <LogOut size={28} color="#02403E" />
export const Plus = <CirclePlus size={20} color="red" />

export const InstagramIcon = <FontAwesomeIcon icon={faInstagram}  size="2xl" />

export const Salary = <FontAwesomeIcon icon={faMoneyBill} size="2xl" style={{color: "#04db80",}} />
export const Freelance = <FontAwesomeIcon icon={faBriefcase} size="2xl" style={{color: "#04db80",}} />
export const Investment = <FontAwesomeIcon icon={faShop} size="2xl" style={{color: "#04db80",}} />
export const Interest = <FontAwesomeIcon icon={faCoins} size="2xl" style={{color: "#04db80",}} />
export const Utilities = <FontAwesomeIcon icon={faMugSaucer} size="2xl" style={{color: "#e01b45",}} />
export const Travelexpenses = <FontAwesomeIcon icon={faCompass} size="2xl" style={{color: "#e01b45",}} />
export const Education = <FontAwesomeIcon icon={faBook} size="2xl" style={{color: "#e01b45",}} />
export const Entertainment = <FontAwesomeIcon icon={faMusic}  size="2xl" style={{color: "#e01b45",}} />
export const Other = <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "darkyellow",}} />

