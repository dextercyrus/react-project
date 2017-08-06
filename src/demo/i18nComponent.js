import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class I18nComponent extends Component {
    static contextTypes = {
        i18n:PropTypes.object.isRequired
    }
}