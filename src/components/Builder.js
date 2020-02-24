import React from "react";

let i = 0;
let lastPoint = [];
let fullFractal = [600][600];
let fragment = [];
let fragmentBuffer = [];
let primaryFigure = [];

class Builder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paint : false
        };
    }

    fragmentBuild(startPoint, figureCoord) {
        let canvas = document.getElementById("Dimension");
        let context = canvas.getContext("2d");

        for(let i = 0; i < 7; i++)
        {
            for(let j = 0; j < 7; j++) {
                if (figureCoord[j + (7*i)] === 1)
                    this.drawPoint(startPoint, context, "black");
                else
                    this.drawPoint(startPoint, context, "white");
                startPoint[0]++;
                if(i === 6 && j === 6)
                    lastPoint = startPoint;
            }
            startPoint[1]++;
            startPoint[0] -= 7;

        }


    }

    cleaningCanvas()
    {
        let canvas = document.getElementById("Dimension");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0,0, 600, 600);
    }

    drawPoint(coordinate, ctx, style)
    {
        ctx.fillStyle = style;
        ctx.fillRect(coordinate[0], coordinate[1], 1,1);
    }


    render() {
        if(this.props.endPaint) {
            this.fragmentBuild([300, 300], this.props.figure);
        }
        if(this.props.clean){
            this.cleaningCanvas();
        }
        return(
            <canvas width="600px" height="600px" id="Dimension">

            </canvas>
        );
    }
}
export default Builder;
