import React from 'react';
import Buttons from '../Buttons/Buttons'



function AdministrationPage(){


    return(
        <div>
            <h3>Welcome on Administration Page, here you can add the ingredients that you use with your cakes</h3>
            <h6>Please follow these steps in order to add your cake</h6>
            <ul>
                <li>Create your ingredients if they don't appear in the list</li>
                <li>Create your cake with your ingredients</li>
                <li>Sell your cake with prices in first second and third choice</li>
            </ul>
            <Buttons/>

        </div>
    )
}

export default AdministrationPage;