import React from 'react';
import ReactDOM from 'react-dom';
import IceContainer from '@icedesign/container';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Grid } from '@icedesign/base';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/mode/shell/shell.js';

require('codemirror/mode/javascript/javascript');

const { Row, Col } = Grid;

const codeString = `npm run dev`;
class CustomCodemirror extends React.Component {
    static displayName = 'CustomCodemirror';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
        value: codeString,
        };
    }

    onChange = (editor, data, value) => {
        console.log({ data, value });
        this.setState({
        value,
        });
    };
    renderCodeMirror = () => {
        const options = {
            mode: 'shell',
            lineNumbers: true,
            tabSize: '2',
            theme: "icecoder",
        };

        return (
            <CodeMirror
            value={this.state.value}
            options={options}
            onChange={this.onChange}
            />
        );
    };
    
    render() {
        return (
            <IceContainer>
            <Row wrap>
                <Col l="12" xxs="24">
                {this.renderCodeMirror()}
                </Col>
            </Row>
            </IceContainer>
        );
    }
}
ReactDOM.render(
    <CustomCodemirror />,
    document.getElementById('root')
);