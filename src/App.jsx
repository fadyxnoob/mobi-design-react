import { useState } from "react";
import { Loader, Topbar, Banner, Footer} from "./Components";
import FullScreenIcon from './assets/images/full-screen.png'


function App() {

  const [loader, setLoader] = useState(false)
  const color = 'light'
  const title = "DESIGN YOUR OWN SUITS"
  const text = "Go Full Screen"
  const bg = 'secondary'
  const icon = FullScreenIcon

  return (
    <>
      {loader && <Loader />}
      <div className="w-100">
        <Topbar textColor={color} bgColor={bg} siteTitle={title} iconText={text} icon={icon} />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
export default App;
