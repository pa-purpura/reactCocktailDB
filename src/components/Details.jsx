import { useState } from 'react';
import '../assets/styles/colors.css';

function Details({ props }) {

    const [language, setLanguage] = useState('english')


    const ingredients = [];
    // console.log('prima', ingredients)

    for (const key in props) {
        if (!!props[key] && key.includes('strIngredient')) {
            console.log(`${key}: ${props[key]}`);
            ingredients.push(props[key])
        }

    }



    // console.log('dopo', ingredients)
    return (
        <>
            <div className="col-md-4 p-2">
                <div className="card bg_white">
                    <img src={props.strDrinkThumb} className="card-img-top" alt={props.strDrink} />
                    <div className="card-body">
                        <h2 className="card-title">{props.strDrink}</h2>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Category: {props.strCategory}</li>
                        <li className="list-group-item">Glass: {props.strGlass}</li>
                        <li className="list-group-item">{props.strAlcoholic}</li>
                    </ul>
                    <div className="card-body">
                        {props.strInstructions
                            ? <a style={{ textDecoration: 'none' }} onClick={() => { setLanguage('english') }} className="card-link">🇬🇧</a>
                            : null
                        }
                        {props.strInstructionsDE
                            ? <a style={{ textDecoration: 'none' }} onClick={() => { setLanguage('german') }} className="card-link">🇩🇪</a>
                            : null
                        }
                        {props.strInstructionsIT
                            ? <a style={{ textDecoration: 'none' }} onClick={() => { setLanguage('italian') }} className="card-link">🇮🇹</a>
                            : null
                        }
                        {props.strInstructionsES
                            ? <a style={{ textDecoration: 'none' }} onClick={() => { setLanguage('espagnol') }} className="card-link">🇪🇸</a>
                            : null
                        }
                        {props.strInstructionsFR
                            ? <a style={{ textDecoration: 'none' }} onClick={() => { setLanguage('franch') }} className="card-link">🇫🇷</a>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8 p-2">
                <div>
                    <h4>Ingredients: </h4>
                    <ul>
                        {ingredients.map(item => <li>{item}</li>)}
                    </ul>

                </div>
                <div>
                    <h4>Instructions: </h4>
                    {
                        (() => {
                            switch (language) {
                                case "italian":
                                    return <p>{props.strInstructionsIT}</p>
                                    break;
                                case "german":
                                    return <p>{props.strInstructionsDE}</p>;
                                    break;
                                case "french":
                                    return <p>{props.strInstructionsFR}</p>;
                                    break;
                                case "espagnol":
                                    return <p>{props.strInstructionsES}</p>;
                                    break;
                                default: return <p>{props.strInstructions}</p>;
                                    break;
                            }
                        }).call(this)
                    }
                </div>
            </div>
        </>
    )
}

export default Details