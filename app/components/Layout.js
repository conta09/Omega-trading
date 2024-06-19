import TopBar from './TopBar';
import Sidebar from './SideBar';

const Layout = ({ children, setContent }) => {
  return (
    <div className="h-screen flex justify-center">
      <Sidebar setContent={setContent} />
      <main className="content flex-grow  text-white">
        <div className="">
          <TopBar />
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
