import Rx from 'rx-lite';
import R from 'ramda';
import { requestProject } from '../stores/ProjectStore';

export var projectLikeStream = new Rx.Subject();

export var processProjectLikes = projectLikeStream
  .map( id => id );

processProjectLikes.subscribe( id => console.log(`Project ${id} liked`));
