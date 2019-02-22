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

    additionComplete()
    {
        let modal = document.querySelector('.modal');
        modal.style.display = "none";
    }

    createItem()
    {
        //store the current field
        var item = this.state.formFields;
        //store current list innto an iterm
        var currentListItems = [...this.state.list];
        //push new item in list
        currentListItems.push(item);
        //apply changes with setState
        //update the list
        //reset the field
        this.setState({
            list: currentListItems,
            formFields: 
            {
                id:'',
                title:'',
                artist:'',
                album:'',
            },
        })
        this.additionComplete();

    }

    showForm()
    {
        let modal = document.querySelector('.modal');
        modal.style.display = "block";
    }

    onChangeFormInput(event)
    {
        // console.log("Input changed");
        // console.log(event.target.name);
        // console.log(event.target.value);
        var currentListFields = {...this.state.formFields};
        currentListFields[event.target.name] = event.target.value;
        this.setState({
            formFields: currentListFields
        });
        console.log(this.state.formFields);

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
                <span className="add" onClick={this.showForm}> [+] </span>
            </div>


            <List list={filteredList} name={this.state.listName}></List>
            <ItemForm  item={this.state.formFields}
               onChangeFormInput={(event) => this.onChangeFormInput(event)}
                createItem={() => this.createItem(event)}
                />
        </div>
    }
}

export default UIManager;