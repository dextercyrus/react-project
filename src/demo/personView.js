import React from 'react';
import PersonEdit from './personEdit';
import { I18nComponent } from './i18nComponent';

export default class UserView extends I18nComponent {
    constructor(props,context){
        super(props,context);
        this.state={
            name:"cyrus yang",
            age:31
        }
        this.onChange = this::this.onChange;
    }
    onChange(data){
        this.setState({
            name:data.name,
            age:data.age
        })
    }
    render() {
        let i18n = this.context.i18n;
        return <div>
            <fieldset>
                <legend>{i18n.personInfo}</legend>
                {`${i18n.name} : ${this.state.name} , ${i18n.age}:${this.state.age}`}
            </fieldset>
            <PersonEdit data={this.state} onSubmit={this.onChange} />
        </div>


    }
}