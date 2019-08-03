import {
  compose,
  map,
  applySpec,
  add,
  prop,
  always,
  values,
  identity,
  converge,
  scan,
  head,
  pluck,
  zip,
  apply,
  over,
  lensProp,
  keys,
  lensIndex,
  assocPath,
} from 'ramda';

export default data => {
  const rawRectList = compose(
    over(lensIndex(0), assocPath(['y'], 0)),
    map(
      compose(
        applySpec({
          x: always(0),
          y: identity,
          height: identity,
          width: always('100%'),
        }),
        add(20),
        a => a * 5,
      ),
    ),
    values,
    prop('titles'),
  );

  /* FP Written by ZH start */
  const newY = converge(scan(add), [
    compose(
      prop('y'),
      head,
    ),
    pluck('height'),
  ]);
  const dataWithYUpdater = converge(zip, [
    compose(
      map(always),
      newY,
    ),
    identity,
  ]);

  const updateY = compose(
    map(apply(over(lensProp('y')))),
    dataWithYUpdater,
  );
  /* FP Written by ZH finish */

  return applySpec({
    rectData: compose(
      updateY,
      rawRectList,
    ),
    titles: compose(
      keys,
      prop('titles'),
    ),
    subTitles: compose(prop('subTitles')),
  })(data);
};
