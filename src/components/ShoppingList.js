import React, { useState } from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  state = {
    selectedCategory: 'All'
  }

  handleCategoryChange = (event) => {
    this.setState({
      selectedCategory: event.target.value
    })
  }

  // we want to filter the items to only display the ones based on the selected category
  itemsToDisplay() {
    return this.props.items.filter((item) => {
      if (this.state.selectedCategory === "All") {
        return true;
      }
  
      if (item.category === this.state.selectedCategory) {
        return true
      }
    })
    .map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ));
  } 

  render() {
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {this.itemsToDisplay()}
        </ul>
      </div>
    );
  }

}

export default ShoppingList;
