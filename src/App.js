import Nevbar from "./components/Nevbar";
import GroupCE from "./pages/GroupCE";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <div className="relative">
        <Modal />
        <Nevbar />
        <GroupCE />
      </div>
    </>
  );
}

export default App;
