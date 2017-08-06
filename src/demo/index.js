import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PersonView from './personView';
import PersonEdit from './personEdit';

let locale = {
    cn: {
        name: "姓名",
        personInfo: "个人信息",
        age: "年龄",
        edit: "编辑",
        submit:"提交"
    },
    en: {
        name: "Name",
        personInfo: "Personal information",
        age: "Age",
        edit: "Edit",
        submit:"Submit"
    }
}


export default class Main extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            locale: this.props.locale,
            i18n: locale[this.props.locale]
        }
        this.onChange = this.onChange.bind(this);
    }
    static propTypes = {
        locale: PropTypes.string.isRequired
    }

    static childContextTypes = {
        i18n: PropTypes.object.isRequired
    }
    getChildContext() {
        return { i18n: this.state.i18n }
    }
    onChange(l) {
        return () => {
            this.setState({ locale: l, i18n: locale[l] })
        }
    }
    render() {
        return (
            <div>
                <div>language:{this.state.locale} name:{this.state.i18n.name}</div>
                <button onClick={this.onChange("en")}>en</button><button onClick={this.onChange("cn")}>cn</button>

                <PersonView />
            </div>
        );
    }
};
