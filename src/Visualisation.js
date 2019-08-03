import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './Visualisation.css';

function Visualisation(props) {
  const visEl = useRef(null);
  useEffect(() => {
    const svgContainer = d3.select(visEl.current);

    const jsonRectangles = [
      {
        x_axis: 10,
        y_axis: 10,
        height: 50,
        width: '100%',
        color: 'rgba(60, 186, 84, 0.3)',
      },
      {
        x_axis: 10,
        y_axis: 60,
        height: 50,
        width: '100%',
        color: 'rgba(60, 186, 84, 0.4)',
      },
      {
        x_axis: 10,
        y_axis: 110,
        height: 100,
        width: '100%',
        color: 'rgba(60, 186, 84, 0.5)',
      },
      {
        x_axis: 10,
        y_axis: 210,
        height: 100,
        width: '100%',
        color: 'rgba(60, 186, 84, 0.6)',
      },
      {
        x_axis: 10,
        y_axis: 310,
        height: 140,
        width: '100%',
        color: 'rgba(60, 186, 84, 0.7)',
      },
      {
        x_axis: 10,
        y_axis: 450,
        height: 140,
        width: '100%',
        color: 'rgba(60, 186, 84, 0.8)',
      },
    ];

    const rectangles = svgContainer
      .selectAll('rect')
      .data(jsonRectangles)
      .enter()
      .append('rect');

    rectangles
      .attr('x', function(d) {
        return d.x_axis;
      })
      .attr('y', function(d) {
        return d.y_axis;
      })
      .attr('height', function(d) {
        return d.height;
      })
      .attr('width', function(d) {
        return d.width;
      })
      .style('fill', function(d) {
        return d.color;
      });
  }, props.data);

  return (
    <>
      <div className="svg-container">
        <svg height="500">
          <g ref={visEl} />
        </svg>
      </div>
    </>
  );
}

export default Visualisation;
