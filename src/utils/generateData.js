import {
  compose,
  map,
  applySpec,
  add,
  prop,
  always,
  values,
  identity,
  sum,
  props,
  assocPath,
} from 'ramda';

export default data => {
  const result = compose(
    map(
      compose(
        applySpec({
          x: always(0),
          y: identity,
          height: identity,
          width: always('100%'),
        }),
        add(100),
        a => a * 10,
      ),
    ),
    values,
    prop('titles'),
  )(data);

  const getSumOfYandHeight = element => sum(props(['y', 'height'])(element));

  /* Imperitive coding start */
  let accValue = 0;
  return result.map((element, index) => {
    if (index === 0) {
      accValue = getSumOfYandHeight(element);
    } else {
      assocPath(['y'], accValue)(element);
      accValue = getSumOfYandHeight(element);
    }
    return element;
  });
  /* Imperitive coding finish */
};
