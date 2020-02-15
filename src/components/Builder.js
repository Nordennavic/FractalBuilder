import React from "react";

let lastPoint = [];
let fullFractal = [];
let fragment = [];
let primaryFigure = [];
class Builder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paint : false
        };
        if(props.endPaint)
        this.fragmentBuild([300, 300], props.figure)
    }

    fragmentBuild(startPoint, figureCoord) {
        for(let i = 0; i < 7; i++)
        {
            for(let j = 0; j < 7; j++) {
                if (figureCoord[j + (7*i)] === 1)
                    this.drawPoint(startPoint);
                startPoint[0]++;
                if(i === 6 && j === 6)
                    lastPoint = startPoint;
            }
            startPoint[1]++;
            startPoint[0] -= 7;
        }
    }

    drawPoint(coordinate)
    {
        fragment.push(<polyline points={coordinate[0].toString() + ',' + (coordinate[1] + 1).toString() + ' ' +
        (coordinate[0] + 1).toString() + ',' + (coordinate[1] + 1).toString() + ' ' +
        (coordinate[0] + 1).toString() + ',' + coordinate[1].toString() + ' ' +
        (coordinate[0]).toString() + ',' + (coordinate[1]).toString()}  />);
    }


    render() {
        return(
            <div>
            <button type="button" onClick={this.fragmentBuild([300, 300], this.props.figure)} />
            <svg width="600px" height="600px">
                {fragment}
            </svg>
            </div>
        );
        }
}
export default Builder;
