import Rx from 'rx-lite';
import R from 'ramda';

export var projectLikeStream = new Rx.Subject();

export var processProjectLikes = projectLikeStream
  .flatMap( event => console.log(event) );

processProjectLikes.subscribe( t => console.log(t));
