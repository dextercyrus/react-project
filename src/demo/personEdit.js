import React from 'react';
import { I18nComponent } from './i18nComponent';
import PropTypes from 'prop-types';

export default class UserEdit extends I18nComponent {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.data;
        this.onChange = this.onChange.bind(this);
    }
    static propTypes ={
        data:PropTypes.object.isRequired,
        onSubmit:PropTypes.func.isRequired
    }
    onChange(event){
        this.setState({...this.state,...{[event.target.name]:event.target.value}})
    }
    onSubmit(){
        this.props.onSubmit(this.state);
    }
    render() {
        let i18n = this.context.i18n;
        return <fieldset>
            <legend>{`${i18n.edit} ${i18n.personInfo}`}</legend>
                <label>{i18n.name} : <input type="text" name="name" defaultValue={this.state.name} onChange={this.onChange} /></label>
                <label>{i18n.age} : <input type="number" name="age" defaultValue={this.state.age} onChange={this.onChange}/></label>
                <br />
                <button onClick={this.onSubmit.bind(this)}>{i18n.submit}</button>
        </fieldset>

    }
}
