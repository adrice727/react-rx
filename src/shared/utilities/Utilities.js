import R from 'ramda';

var buildStats = (statsObject) => {
  if ( !statsObject ) { return []; }
  return R.map( type => ({type: type, value: statsObject[type]}) , R.keys(statsObject));
};

export { buildStats };
