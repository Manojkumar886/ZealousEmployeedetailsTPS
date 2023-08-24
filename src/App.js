import {  BootstrapProcess1 } from "./BootstrapExecution";
import OrderlistHTML, { AnchorTagsHTML, BasictagsHTML, TableHTML } from "./Components";

function App()
{
 return(
    <>
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
    <BootstrapProcess1/>
    </>
 );
}

export default App;