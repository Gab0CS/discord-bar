
import SideBarIcon from './SideBarIcon';
import { CiBatteryFull, CiMug1, CiTrash, CiLight} from "react-icons/ci";

export const SideBar = (): JSX.Element => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-gray-900 text-white shadow">
            <SideBarIcon icon = {<CiBatteryFull size="28"/>} text='Battery Full'/>
            <SideBarIcon icon = {<CiMug1 size="28" />} text='Mug'/>
            <SideBarIcon icon = {<CiTrash size="28"/>} text='Trash'/>
            <SideBarIcon icon = {<CiLight size="28"/>} text='Light'/>
        </div>
    );
}

