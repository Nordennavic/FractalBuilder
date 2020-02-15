import React from "react";

let lastPoint = [];
let fullFractal = [];
let fragment = [];
let primaryFigure = [];
class Builder extends React.Component {
    constructor(props) {
        super(props);
        primaryFigure = props;
        this.state = {
            paint : false
        };
        this.fragmentBuild([300, 300], this.props)
    }

    fragmentBuild(startPoint, figureCoord) {
        for(let i = 1; i < 8; i++)
        {
            for(let j = 1; j < 8; j++) {
                if (figureCoord[j * i] === 1)
                    this.drawPoint(startPoint);
                startPoint[1]++;
                if(i === 7 && j === 7)
                    lastPoint = startPoint;
            }
            startPoint[0]++;
            startPoint[1] -= 7;
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
            <button type="button" onClick={this.fragmentBuild([300, 300], primaryFigure)} />
            <svg width="600px" height="600px">
                {fragment}
            </svg>
            </div>
        );
        }
}
export default Builder;
