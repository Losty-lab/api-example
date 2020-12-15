import React, { useEffect } from 'react';
import * as actions from '../redux/actions/indexSales';
import {connect} from 'react-redux';
import './home.css';

//**REDUX TOOLKIT */
import {useSelector} from 'react-redux'


//** */



function Home(props){

    //**REDUX TOOLKIT */

    const home=useSelector((state)=>{

        return (
            state.home.home
        )
    })

    console.log('HOME',home)

    //** */





    useEffect(()=>{

       // props.autoReadingSalesHome()

        //**REDUX TOOLKIT */

        props.autoReadingSalesHome()

        //** */

    },[])

function changeDisable(e){
    console.log(e.target.alt)
    props.setDisableInfo(e.target.alt)
}

    // function renderSales(){
    //     return props.home.map(elem=>{
    //         return(
    //             <div className="element-sales" key={elem.cakeId}>
    //                     <img src={elem.listcakes[0].imgLink}
    //                     width="150"
    //                     height="150"
    //                     alt={elem.listcakes[0].name}
    //                     onClick={(e)=>changeDisable(e)}
    //                     /><br/>
    //                     <span className="elem-name"><b>{elem.listcakes[0].name}</b>
    //                     </span><span className="elem-weight">{elem.listcakes[0].weight}</span><br/>
                        
    //                     {elem.disableInfo ? 
    //                         <div>
    //                         <ul>
    //                             <li key={elem.first}>{elem.first} Euro</li>
    //                             <li key={elem.second}>{elem.second} Euro</li>
    //                             <li key={elem.third}>{elem.third} Euro</li>
    //                         </ul>
    //                         <span>Ingredients</span>
    //                         <ul>
    //                             {elem.listcakes[0].ingredients.map(ingredient=>{
    //                                 return (
    //                                     <li key={ingredient}>{ingredient}</li>
    //                                 )
    //                             })}
    //                         </ul>
    //                         </div>
                            
    //                      :
    //                      null   
    //                     }
    //                     </div>
                        
                
    //         )
    //     })


    // }

    //**REDUX TOOLKIT */

    function renderSales(){
        return home.map(elem=>{
            return(
                <div className="element-sales" key={elem.cakeId}>
                        <img src={elem.listcakes[0].imgLink}
                        width="150"
                        height="150"
                        alt={elem.listcakes[0].name}
                        onClick={(e)=>changeDisable(e)}
                        /><br/>
                        <span className="elem-name"><b>{elem.listcakes[0].name}</b>
                        </span><span className="elem-weight">{elem.listcakes[0].weight}</span><br/>
                        
                        {elem.disableInfo ? 
                            <div>
                            <ul>
                                <li key={elem.first}>{elem.first} Euro</li>
                                <li key={elem.second}>{elem.second} Euro</li>
                                <li key={elem.third}>{elem.third} Euro</li>
                            </ul>
                            <span>Ingredients</span>
                            <ul>
                                {elem.listcakes[0].ingredients.map(ingredient=>{
                                    return (
                                        <li key={ingredient}>{ingredient}</li>
                                    )
                                })}
                            </ul>
                            </div>
                            
                         :
                         null   
                        }
                        </div>
                        
                
            )
        })


    }

  //** */


    return(
        
        <div>
            <h1>This is home</h1>
            
            <div>
            {renderSales()}
            </div>
            </div>
            
        
    )
}

// function mapStateToProps(state){
//     console.log('state home',state)
//     return{
//         home:state.home.home
//     }
// }



//export default connect(mapStateToProps,actions)(Home);


//**REDUX TOOLKIT */

export default connect(null,actions)(Home);

//** */