import React from "react";
import data from "./data"
import Header from "./header";
import List from "./List";
import Item from "./Item";
import ItemForm from "./ItemForm";


console.log(data);

class UIManager extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            listName : "The List",
            list : data.music,
            searchTerm: '',
            formFields: 
            {
                id:'',
                title:'',
                artist:'',
                album:'',
            },
        }
    }

    searchList(event) 
	{
        var search_term = event.target.value;
        console.log('${this.state.search_term} -> ${searchTerm}');
        
        this.setState({
        searchTerm : search_term
        });
	}

    render()
    {
        var list = this.state.list;
        var search_term = this.state.searchTerm;
        var filteredList;

        if(!search_term)
        {
            filteredList = list;
        } else 
        {
            filteredList = list.filter(function(item){
                return item.title.toLowerCase().includes(search_term.toLowerCase());
            });            
        }

        return <div>
            <Header/>
            <div className="options">
                <input type="text"
                placeholder="Filter"
                onChange={(event) => this.searchList(event)}/>
            </div>


            <List list={filteredList} name={this.state.listName}></List>
            <ItemForm  item={this.state.formFields}/>
        </div>
    }
}

export default UIManager;