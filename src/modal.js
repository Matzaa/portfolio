import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("modal mounted");
        console.log("porps", this.props);
    }

    render() {
        return (
            <div className="preview">
                <div className="player">
                    <h1 className="x" onClick={() => this.props.hide()}>
                        x
                    </h1>
                    <video src={this.props.url} loop muted autoPlay></video>
                </div>
            </div>
        );
    }
}
