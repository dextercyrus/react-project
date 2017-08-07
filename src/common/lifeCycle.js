import { Component } from 'react';

export default class CycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", arguments);
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", arguments);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidMount(nextProps, nextState) {
        console.log("componentDidMount", arguments);
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", arguments);
    }
    render() {
        console.log("render");
    }
}