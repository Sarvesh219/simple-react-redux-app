import React, { Component } from 'react';

class AddUserForm extends Component {
    state = {
        form: {
            name: ''
        }
    };

    handleNameChange = event => {
        let { form } = this.state;
        form[event.target.id] = event.target.value;
        this.setState({ form });
    };

    
    handleSubmit = () => {
        const { onHandleCreate } = this.props;
        const { form } = this.state;
        onHandleCreate(form.name);
        this.setState({
            form: {
                name: ''
            }
        })
    };

    render() {
        const { form } = this.state;
        return (
            <div>
                <section>
                    <label>Enter Name: </label>
                    <input style={{ padding: 10 }} type="text" id="name" value={form.name} placeholder="Enter name"
                    onChange={this.handleNameChange}/>
                    <button style={{ marginTop: 10, marginLeft: 10, padding: 10, minWidth: 100, borderRadius: 5, backgroundColor: '#0EBFE9', color: '#fff' }} onClick={this.handleSubmit}>Submit!</button>
                </section>
            </div>
        );
    }
}

export default AddUserForm;

