import { Link } from "react-router-dom";

const DesktopSidebar = ({community, routeData, setExpanded}) => {
  return (
    <div className="sidenav desktopMenu">
      <img src={community} alt="logo" className="logo" />
      <div className="menu">
        <ul className="menu-list">
          {routeData &&
            routeData.map((item, index) => {
              return (
                <li className="menu-item" key={index}>
                  <Link
                    to={item.linkPath}
                    className="menu-link"
                    onClick={() => setExpanded(false)}
                  >
                    {item.linkName}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default DesktopSidebar;
