// import {  BootstrapProcess1 } from "./BootstrapExecution";
// import OrderlistHTML, { AnchorTagsHTML, BasictagsHTML, TableHTML } from "./Components";
// import { Usestatehook2 } from "./Hooks";
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { BootstrapProcess1 } from './BootstrapExecution';
import { Registration } from './RegistrationForm';
import { Homepage } from './ZealousPage';
import { Viewpage } from './Listpage';

function App()
{
 return(
    <>
    {/* <Registration/> */}
    <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path='listall' exact element={<Viewpage/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Usestateusingternary/> */}
    {/* <Usestatehook2/>
    <AnchorTagsHTML/>
    <p>
      JSON is the replacement of the XML data exchange format in JSON.
      <br></br>
      JSON stores all the data in an array so data transfer makes easier.
      <br></br> 
      That’s why JSON is the best for sharing data of any size even audio, video, etc.
    </p>
    <OrderlistHTML/>
    <BasictagsHTML/>
    <TableHTML/>
    <BootstrapProcess1/> */}
    </>
 );
}

export default App;