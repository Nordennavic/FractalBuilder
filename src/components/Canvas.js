import React from "react";
import $ from 'jquery';
import Builder from "./Builder";

class Canvas extends React.Component {
        constructor(props) {
            super(props);

            this.state={
                painting : true,
                strokeCells : [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                endPaint : false
            };
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
                 this.setState({strokeCells : [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]})
            }

        brushStroke(event){
            let cell = event.target;
            if(this.state.painting){
                cell.style.background = 'black';
                this.setState(state => {state.strokeCells[cell.id.toString()] = 1; return state.strokeCells});
            } else {
                cell.style.background = 'white';
                this.setState(state => {state.strokeCells[cell.id.toString()] = 0; return state.strokeCells});
            }

        console.log(this.state.strokeCells)
        }

    render() {
        let cells = [];                               // Dynamic adding "cells of canvas"
        for(let i = 0; i < 49; i++) {
            cells.push(<div id={i.toString()} key={i.toString()} onClick={this.brushStroke} />);
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
                    <button type='button' id='drawFractal'>draw</button>
                </div>
                <Builder name={this.state.strokeCells}/>
            </div>)
                }
}


export default Canvas;

//{this.state.endPaint ? <Builder children={this.props}/> : ''};
