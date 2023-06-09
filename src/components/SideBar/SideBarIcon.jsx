

const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100:">
            {text}
        </span>
    </div>
    
);

export default SideBarIcon;