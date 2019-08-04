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
  lensIndex,
  assocPath,
  pipe,
  toPairs,
  objOf,
  zipWith,
  merge,
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
          width: always(300),
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
  const titleData = compose(
    pipe(
      toPairs,
      map(
        compose(
          objOf('title'),
          apply(objOf),
        ),
      ),
    ),
    prop('subTitles'),
  )(data);

  const rectData = compose(
    updateY,
    rawRectList,
  )(data);

  return zipWith(merge, rectData, titleData);
};
