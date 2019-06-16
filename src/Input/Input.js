import React from 'react';
import TodoContext from '../TodoContext';
import ValidationError from '../ValidationError/ValidationError';
import cuid from 'cuid';
import './Input.css';

class Input extends React.Component {
    state = {
        title: '',
        dueDate: '',
        note: '',
        isFormValid: false,
        isTitleValid: false,
        isDueDateValid: false,
        errorMessages: {
            errorTitle: '',
            errorDueDate: '',
        }
    }

    titleInput = React.createRef();
    dateInput = React.createRef();
    noteInput = React.createRef();
    
    static contextType = TodoContext;

    // change handlers
    titleOnChangeHandler = (value) => {
        this.setState({title: value}, this.validateTitle(value));
    }

    dueDateOnChangeHandler = value => {
        this.setState({dueDate : value}, this.validateDueDate(value));
    }

    noteOnChangeHandler = value => {
        this.setState({note: value});
    }

    // validators
    validateForm = () => {
        // if all the validators are true, then the form is valid
        this.setState({
            isFormValid: this.state.isTitleValid && this.state.isDueDateValid
        })
    }

    validateTitle = value => {
        // deconstruct current messages
        let messages = {...this.state.errorMessages};
        let isTitleValid = false;

        // title cannot be empty
        if(value === '') {
            messages.errortitle = 'title field can not be empty';
            isTitleValid = false;
        } else {
            messages.errortitle = '';
            isTitleValid = true;
        }

        // validation checks complete, update state
        this.setState({
            isTitleValid: isTitleValid,
            errorMessages: messages,
        }, this.validateForm);
    }

    validateDueDate = value => {
        console.log(value);
        let messages = {...this.state.errorMessages};
        let isDueDateValid = false;
        let now = new Date();
        // This is not accounting for time zones, so selecting today's date will calculate a date
        // that's a day behind for my time zone:
        // now:  Sun Jun 16 2019 11:57:44 GMT-0500 (Central Daylight Time) 
        // selected:  Sat Jun 15 2019 19:00:00 GMT-0500 (Central Daylight Time)
        let selectedDate= new Date(value);

        // date is required
        if (value === '') {
            messages.errorDueDate = 'Due date can not be empty.';
            isDueDateValid = false;
        } else if (selectedDate < now) {
            // Due date can't be in the past 
            messages.errorDueDate = 'Due date can not be in the past.';
            isDueDateValid = false;
        } else {
            isDueDateValid = true;
            messages.errorDueDate = '';
        }

        // validation check complete, update state
        this.setState({
            errorMessages: messages,
            isDueDateValid: isDueDateValid,
        }, this.validateForm);
    }

    // form submission handler
    formHandleSubmit = (e) => {
        e.preventDefault();

        // Create object to pass back to state in App
        let newTodoItem = {
            id: new cuid(),
            title: this.state.title,
            dateDue: new Date(this.state.dueDate).toISOString(),
            dateAdded: new Date().toISOString(),
            note: this.state.note
        }
        
        // pass new todo item callback
        this.context.addItem(newTodoItem);

        // reset form values
        this.titleInput.current.value = '';
        this.dateInput.current.value = '';
        this.noteInput.current.value = '';
    }

    render() {
        //const contextType = TodoContext;

        return (
            <section>
                {!this.state.isFormValid ? <ValidationError errorMessages={this.state.errorMessages} /> : ''}
                <form className='todolist_input_form' onSubmit={e => this.formHandleSubmit(e)}>
                    <label htmlFor='todo-title'>title: </label>
                    <input type='text' id='todo-title' name='todo-title' required ref={this.titleInput} onChange={e => this.titleOnChangeHandler(e.target.value)}/>
                    <br />
                    <label htmlFor='todo-due-date'>Due date: </label>
                    <input type='date' id='todo-due-date' name='todo-due-date' ref={this.dateInput} onChange={e => this.dueDateOnChangeHandler(e.target.value)} />
                    <br />
                    <label htmlFor='todo-note'>Note: </label>
                    <textarea id='todo-note' name='todo-note' ref={this.noteInput} onChange={e => this.noteOnChangeHandler(e.target.value)}/>
                    <br />
                    <button type='submit' disabled={!this.state.isFormValid}>Create</button>
                </form>
            </section>
        )
    }
}

export default Input;