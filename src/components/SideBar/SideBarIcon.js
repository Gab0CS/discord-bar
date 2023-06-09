

const SideBarIcon = ({ icon, text='tooltip' }) => (
    <div className="sidebar-icon">
        {icon}
    <span className="sidebar-tooltip group-hover:scale-100:">
        {text}
    </span>
    </div>
    
);

export default SideBarIcon;