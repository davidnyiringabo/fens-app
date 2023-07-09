import "./Sidebar.css";
import { CiClock2 } from "react-icons/ci";
import { SiGoogleanalytics } from "react-icons/si";
import {
  MdHomeFilled,
  MdOutlineHelpOutline,
  MdOutlineLogout,
} from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

interface Props {
  activateSideBar: boolean;
}
const Sidebar: React.FC<Props> = ({ activateSideBar }) => {
  return (
    <>
      {activateSideBar && (
        <div className="container">
          <div className="container--upper">
            <div className="link-container active">
              <div className="link-item">
                <MdHomeFilled />
              </div>

              <Link to="/dashboard/">
                <div className="link-name">Dashboard</div>
              </Link>
            </div>

            <div className="link-container">
              <div className="link-item">
                <CiClock2 />
              </div>

              <Link to="/dashboard/schedules">
                <div className="link-name">Schedules</div>
              </Link>
            </div>

            <div className="link-container">
              <div className="link-item">
                <SiGoogleanalytics />
              </div>

              <Link to="/dashboard/analytics">
                <div className="link-name">Analytics</div>
              </Link>
            </div>

            <div className="link-container">
              <div className="link-item">
                <VscFeedback />
              </div>
              <Link to="/dashboard/feedback">
                <div className="link-name">Feedback</div>
              </Link>
            </div>
          </div>

          <div className="container--lower">
            <div className="link-container">
              <div className="link-item">
                <MdOutlineHelpOutline />
              </div>
              <Link to="/dashboard/help">
                <div className="link-name">Help</div>
              </Link>
            </div>

            <div className="link-container">
              <div className="link-item">
                <IoMdSettings />
              </div>
              <Link to="/dashboard/settings">
                <div className="link-name">Settings</div>
              </Link>
            </div>

            <div className="link-container logout">
              <div className="link-item">
                <MdOutlineLogout />
              </div>
              <Link to="/dashboard/logout">
                <div className="link-name">Logout</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
