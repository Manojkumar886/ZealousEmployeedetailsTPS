import './CSSExternal.css'

function OrderlistHTML()
{
    return(
        <>
        <ol id="ol">
            FlowerNames
            <li>Rose</li>
            <li>Jasmine</li>
            <li>Lily</li>
            <li>SunFlower</li>
            <li>Lotus</li>
        </ol>
        </>
    );
}

let TableHTML=()=>
{
    const bgcolor={backgroundColor:'pink'};
    return(
        <>
            <table style={bgcolor}>
                <thead>
                    <tr>
                        <th>SerialNo</th>
                        <th>StudentName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Manojkumar</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tamil</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pavi</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mohan</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Rohini</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


function BasictagsHTML()
{
    return(
        <>
            <h1>HEadline Tag is Best option for Headline Topics and subtitles</h1>
        </>
    );
}

export var AnchorTagsHTML=()=>
{
    return(
        <>
            <a href="https://www.youtube.com" target="_blank">Youtube</a>
        </>
    );
}
export {TableHTML,BasictagsHTML};
export default OrderlistHTML;