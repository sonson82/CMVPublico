import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import Link from '@material-ui/core/Link';

const Component2 = () => {


    return (
         <>
         <div className="component2">

            <h1>COMPONENTE 2</h1>

            <h2>MATERIAL UI LINKS</h2>
            
            <div className="cont-all-center">
                <ul className="inline-list">
                    <li className="media_link"><Link href="#" target="_blank" rel="noopener noreferrer" ><FacebookIcon /></Link></li>
                    <li className="media_link"><Link href="#" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></Link></li>
                    <li className="media_link"><Link href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link></li>
                </ul>
            </div>

            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit lacus erat posuere, massa habitasse inceptos sollicitudin urna pretium tortor 
            vulputate bibendum aptent duis, etiam vitae nulla est mollis non felis tristique convallis. Etiam et ad at facilisis nec hac, mauris 
            vulputate ridiculus auctor lobortis libero, fames vel tempus vehicula justo. Convallis eros duis aliquet nullam tempus felis, ornare malesuada 
            arcu aenean volutpat, elementum potenti quisque himenaeos mi.
            </p>
           
         </div>
     
        </>
    );
}

export default Component2;