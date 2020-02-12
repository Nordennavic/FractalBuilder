import React from "react";
//import $ from 'jquery';

class Canvas extends React.Component {
        constructor(props) {
            super(props);
            this.state={painting : true};
            this.toPainting= this.toPainting.bind(this);
            this.toErasing = this.toErasing.bind(this);
        }

            toPainting() {
            if(this.state.painting !== true)
                this.setState({painting : true});
            this.render { return <button type='button' id='brush' onClick={this.toPainting} disabled>Brush</button>}
        }
            toErasing() {
            if(this.state.painting === true) {
                this.setState({painting: false});
                return <button type='button' id='eraser' onClick={this.toErasing}   disabled>Eraser</button>
            }

        /*clean.onclick = function(){
            $("#grid").children().css("background", "white");

        }
        brush.onclick = function(){
            paint = true;
            brush.disabled='disabled';
            eraser.disabled='';
        }

        eraser.onclick = function(){
            paint = false;
            eraser.disabled='disabled';
            brush.disabled='';
        }

        function Click(event){
            let tr = event.target;
            if(paint === true)
                tr.style.background = 'black';
            else tr.style.background = 'white';
        }*/

    }
    render() {
        return (
            <div>
                <div id='grid'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div classname='toolsPanel'>
                    <button type='button' id='brush' onClick={this.toPainting} disabled>Brush</button>
                    <button type='button' id='eraser' onClick={this.toErasing} >Eraser</button>
                    <button type='button' id='clean'>Clean</button>
                </div>
            </div>)
                }
}

export default Canvas;
