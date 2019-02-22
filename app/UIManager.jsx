import React from "react";
import data from "./data"
import Header from "./header";
import List from "./List";

console.log(data);

class UIManager extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            listName : "The List",
            list : data.music
        }
    }

    searchList(event) 
	{
		var search_term = event.target.value;
		console.log(search_term);
	}

    render()
    {
        return <div>
            <Header/>
            <div className="options">
                <input type="text"
                placeholder="Filter"
                onChange={this.searchList}/>
            </div>
            <List list={this.state.list} name={this.state.listName}></List>
        </div>
    }
}

export default UIManager;