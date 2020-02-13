import React from "react";
import $ from 'jquery';

class Canvas extends React.Component {
        constructor(props) {
            super(props);
            this.state={painting : true};
            this.toPainting= this.toPainting.bind(this);
            this.toErasing = this.toErasing.bind(this);
            this.cleaning = this.cleaning.bind(this);
            this.brushStroke = this.brushStroke.bind(this);
        }

            toPainting() {
            if(this.state.painting !== true)
                this.setState({painting : true});
        }
            toErasing() {
                if (this.state.painting === true) {
                    this.setState({painting: false});
                }
            }

             cleaning(){
                 $("#grid").children().css("background", "white");
            }

        brushStroke(event){
        this.state.painting ? event.target.style.background = 'black' : event.target.style.background = 'white';
        }

    render() {
        let cells = [];                               // Dynamic adding "cells of canvas"
        for(let i = 0; i < 49; i++) {
            cells.push(<div key={i.toString()} onClick={this.brushStroke} />);
        }
        return (
            <div>
                <div id='grid'>
                    {cells}
                </div>
                <div className='toolsPanel'>
                    <button type='button' id='brush' onClick={this.toPainting} disabled={this.state.painting}>Brush</button>
                    <button type='button' id='eraser' onClick={this.toErasing} disabled={!this.state.painting}>Eraser</button>
                    <button type='button' id='clean' onClick={this.cleaning}>Clean</button>
                </div>
            </div>)
                }
}

export default Canvas;
