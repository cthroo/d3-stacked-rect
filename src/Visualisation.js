import React, {useEffect, useRef} from 'react';
import {head, keys, values, concat} from 'ramda';
import * as d3 from 'd3';
import getRandomColor from './utils/getRandomColor';
import generatedata from './utils/generateData';
import './Visualisation.css';

function Visualisation(props) {
  const visEl = useRef(null);
  useEffect(() => {
    const svgContainer = d3.select(visEl.current);
    const colorValue = getRandomColor();
    const rectData = generatedata(props.data);
    const formatedData = rectData.map((rec, index) => {
      const opacity = (index * 10 + 20) / 100 > 1 ? 1 : (index * 10 + 20) / 100;
      return {
        ...rec,
        opacity,
        color: colorValue,
      };
    });

    const container = svgContainer
      .selectAll('g')
      .data(formatedData)
      .enter()
      .append('g');

    container
      .append('rect')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('height', d => d.height)
      .attr('width', d => d.width)
      .attr('class', () => 'rect-style')
      .style('fill', d => d.color)
      .style('opacity', d => d.opacity);

    container
      .append('text')
      .attr('x', d => d.x)
      .attr('y', d => d.y + d.height / 2)
      .style('font-size', 18)
      .attr('dy', '.35em')
      .text(d =>
        head(values(d.title))
          ? concat(head(keys(d.title)), `(${head(values(d.title))})`)
          : head(values(d.title)),
      )
      .attr('transform', d => 'translate(' + 10 + ',' + 0 + ')');
  }, props.data);

  return (
    <>
      <div className="svg-container">
        <svg height={700}>
          <g ref={visEl} />
        </svg>
      </div>
    </>
  );
}

export default Visualisation;
