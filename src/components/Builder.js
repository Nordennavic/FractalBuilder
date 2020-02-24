import React from "react";

let GlobalI = 0;
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

    /*fragmentBuild(startPoint, figureCoord) {
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

    }*/

    Rotate(matrix){
        let rotateMatrix = matrix;
        for(let i = 0; i < matrix.length; i++)
        {
            for(let j = 0; j < matrix.length; j++)
            {
                rotateMatrix[j][matrix.length - 1 - i] = matrix[matrix.length - 1 - i][j];
            }
        }
        return rotateMatrix;
    }

    BuildFigure(startPoint, figureCoord){
        let figure = [1000][1000];
        for(let i = 0; i < 7; i++)
        {
            for(let j = 0; j < 7; j++) {
                if (figureCoord[j + (7*i)] === 1){
                    figure[i + 300][j + 300] = 1;
                    lastPoint = startPoint;
                } else
                    figure[i + 300 ][j + 300] = 0;
                startPoint[0]++;
            }
            startPoint[1]++;
            startPoint[0] -= 7;
        }
        this.BuildFract(figure)
    }

    BuildFract(figure) {
        let alreadyLastPoint;
        let rotateFigure = this.Rotate(figure);
        for(let i = 0; i < rotateFigure.length; i++)
        {
            for(let j = 0; j < rotateFigure.length; j++) {
                if (rotateFigure[j][i] === 1){
                    figure[lastPoint[0]+1 + i + 300][lastPoint[1]+1 + j + 300] = 1;
                    alreadyLastPoint = lastPoint;
                } else
                    figure[lastPoint[0]+1 + i + 300][lastPoint[1]+1 + j + 300] = 0;
                lastPoint[0]++;
            }
            lastPoint[1]++;
            lastPoint[0] -= rotateFigure.length;
        }
        GlobalI++;
        if(GlobalI !== 4)
            this.BuildFract(figure);

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
            this.BuildFigure([300, 300], this.props.figure);
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
