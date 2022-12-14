/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ActionButtons from '../ActionButtons';

describe('ActionButtons test', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById('container'));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('render Action Button with defaults', () => {
        ReactDOM.render(<ActionButtons options={[{action: 'delete'}]} />, document.getElementById('container'));
        const actionButton = document.querySelector(
            '.gn-resource-action-buttons'
        );
        expect(actionButton).toExist();
    });
});
