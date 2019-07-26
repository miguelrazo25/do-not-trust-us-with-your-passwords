import React, { Component } from "react";
import "./GetDrink.css";

class GetDrink extends Component {
    state = {
        loading: true
    };

    async componentDidMount(){
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ drinks: data.drinks[0], loading: false });
        console.log(data);
    } 

    render() {
        return (
            <div>
                {this.state.loading || !this.state.drinks ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div className="card get-drink-div">
                            <div className="card-header">
                                Drink UWU
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.drinks.strDrink}</h5>
                                <p className="card-text">Category: {this.state.drinks.strCategory}</p>
                                <img src={this.state.drinks.strDrinkThumb} alt="drink" />
                                <p className="card-text">Ingredients: {this.state.drinks.strIngredient1} {this.state.drinks.strIngredient2} {this.state.drinks.strIngredient3} {this.state.drinks.strIngredient4} {this.state.drinks.strIngredient5} {this.state.drinks.strIngredient6}</p>
                                <p className="card-text">Instructions: {this.state.drinks.strInstructions}</p>
                                <a className="btn btn-mod">Drink and type</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default GetDrink;