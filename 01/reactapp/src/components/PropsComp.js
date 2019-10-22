import React, { Component } from 'react'
import PropTypes from 'prop-types'
import user from './User';

export class PropsComp extends Component {
    state = {
        isVisible : false
    }

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         isVisible : false
    //     }
    // }

    //constructorda this bind etme

    // constructor(props){
    //     super(props)
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }




    onClickEvent = (e) =>{
        // console.log(this);
        // console.log(number);
        // this.state.isVisible=true;
        
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    onDeleteUser= () => {
        const {id,deleteUser} = this.props;
        deleteUser(id);
    }

    render() {
        //destructing
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                    <i onClick={this.onDeleteUser} className="far fa-trash-alt" style = {{cursor : "pointer"}} ></i>
                </div>
                {
                    isVisible ? <div className="card-body">
                    <p className="card-text">Maaş: {salary}</p>
                    <p className="card-text">Departman: {department}</p>
                </div> : null
                }
                
                </div>
            </div>
        )
    }
}

user.propTypes={
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired
}

user.defaultProps = {
    name : "Bilgi yok",
    salary : "none",
    department : "Bilgi yok"
}

export default PropsComp;
