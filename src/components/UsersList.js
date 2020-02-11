import React, { Component } from 'react';

class UsersList extends Component {

    render() {
        const { usersList, onHandleDelete } = this.props;
        return usersList.map((name, index) => {
            return (
                <section key={index} style={{ marginTop: 10, marginBottom: 10, border: '1px solid #000', padding: 20 }}>
                    <div>
                        <label>Name: </label>
                        <span>
                            {name}
                        </span>
                    </div>
                    <div>
                        <button style={{ marginTop: 10, padding: 10, minWidth: 100, backgroundColor: '#ff3232', color: '#fff', fontWeight: 'bold', borderRadius: 5 }} onClick={() => onHandleDelete(name)}>Delete</button>
                    </div>
                </section>
            );
        })
    }  
};

export default UsersList;