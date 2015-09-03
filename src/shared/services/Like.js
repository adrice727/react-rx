import Rx from 'rx-lite';
import R from 'ramda';
import { requestProject } from '../stores/ProjectStore';

export var projectLikeStream = new Rx.Subject();

export var processProjectLikes = projectLikeStream
  .flatMap( event => event );

processProjectLikes.subscribe( t => console.log(requestProject(t)));
