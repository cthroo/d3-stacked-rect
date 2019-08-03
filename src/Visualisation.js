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

    const {rectData} = generatedata(props.data);
    console.log(rectData);
    const formatedData = rectData.map((rec, index) => {
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
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('height', d => d.height)
      .attr('width', d => d.width)
      .attr('class', () => 'rect-style')
      .style('fill', d => d.color)
      .style('opacity', d => d.opacity);
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
