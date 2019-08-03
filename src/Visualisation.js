import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import getRandomColor from './utils/getRandomColor';
import generatedata from './utils/generateData';
import './Visualisation.css';

function Visualisation(props) {
  const visEl = useRef(null);
  useEffect(() => {
    const svgContainer = d3.select(visEl.current);
    const colorValue = getRandomColor();

    const jsonRectangles = generatedata(props.data);
    console.log(jsonRectangles);
    const formatedData = jsonRectangles.map((rec, index) => {
      const opacity = (index * 10 + 20) / 100 > 1 ? 1 : (index * 10 + 20) / 100;
      return {
        ...rec,
        opacity,
        color: colorValue,
      };
    });

    const rectangles = svgContainer
      .selectAll('rect')
      .data(formatedData)
      .enter()
      .append('rect');

    rectangles
      .attr('x', function(d) {
        return d.x;
      })
      .attr('y', function(d) {
        return d.y;
      })
      .attr('height', function(d) {
        return d.height;
      })
      .attr('width', function(d) {
        return d.width;
      })
      .style('fill', function(d) {
        return d.color;
      })
      .style('opacity', function(d) {
        return d.opacity;
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
