/// <reference path='../_all.ts' />
import * as angular from 'angular';
import {AnimalDietTracker} from './animalDietTracker.ts';

angular.module('app', [])
    .directive('animalDietTracker', () => new AnimalDietTracker());