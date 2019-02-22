import React from 'react';

class ItemForm extends React.Component {

    hideForm()
    {
        console.log("Form Close");
        let modal = document.querySelector('.modal');
        modal.style.display = "none";
    }

    submitForm(event)
    {
        event.preventDefault();
        //Prevents the page from reloading on the form submission
        console.log("Form Sbumitted");
        this.props.createItem();
    }

    render() {

        var item = this.props.item;

        if (!item) {
            return '';
        }

        return (
            <div className="modal">
                <form>
                    <div className="close_form">                        
                        <span onClick={this.hideForm} >[🗙]</span>
                    </div>
                    <h3>Create a new item</h3>
                    <p>
                        <label>ID:</label>
                        <input name="id" 
                               value={item.id}
                               onChange={(event) => this.props.onChangeFormInput(event)} 
                               />
                    </p>
                    <p>
                        <label>Title:</label>
                        <input name="title" 
                               value={item.title} 
                               onChange={(event) => this.props.onChangeFormInput(event)} />
                    </p>
                    <p>
                        <label>Artist:</label>
                        <input name="artist" 
                               value={item.artist}
                               onChange={(event) => this.props.onChangeFormInput(event)} />
                    </p>
                    <p>
                        <label>Album:</label>
                        <input name="album" 
                               value={item.album} 
                                onChange={(event) => this.props.onChangeFormInput(event)} />
                    </p>

                    <div className="create">
                        <button onClick={(event) => this.submitForm(event)}>
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ItemForm;