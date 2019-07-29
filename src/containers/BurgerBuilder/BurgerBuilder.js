import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Modal from '../../components/UI/Modal/Modal';

import Wrap from '../../hoc/Wrap';

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4.0,
        purchasable: false,
        purchasing: false
    };

    updatePurchase = () => {
        const ingredients = {...this.state.ingredients};
        const totalIngredients = Object.keys(ingredients).reduce((total, el) => {
            return total + ingredients[el];
        }, 0);

        this.setState({purchasable: totalIngredients > 0});
    };

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: {...updatedIngredients},
            totalPrice: newPrice
        }, this.updatePurchase);
    };

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount < 1) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: {...updatedIngredients},
            totalPrice: newPrice
        }, this.updatePurchase);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        console.log('to be continued');
    };

    render() {
        let disabledInfo = {...this.state.ingredients};
        Object.keys(disabledInfo).forEach(key => {
            disabledInfo[key] = disabledInfo[key] === 0;
        });

        return (
            <Wrap>
                <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
            </Wrap>
        );
    }
}

export default BurgerBuilder;