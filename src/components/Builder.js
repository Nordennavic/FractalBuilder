import React from "react";
import $ from "jquery";

let i = 0;
let lastPoint = [];
let fullFractal = [];
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
                    this.drawPoint(startPoint, context);
                startPoint[0]++;
                if(i === 6 && j === 6)
                    lastPoint = startPoint;
            }
            startPoint[1]++;
            startPoint[0] -= 7;

        }


    }

    drawPoint(coordinate, ctx)
    {
        ctx.fillRect(coordinate[0], coordinate[1], 4,4);
    }


    render() {
        if(this.props.endPaint) {
        }
        return(
            <canvas width="600px" height="600px" id="Dimension">

            </canvas>
        );
    }
}
export default Builder;
