/// <reference path='../_all.ts' />
import * as angular from 'angular';
import {AnimalDietTracker} from './components/animalHouse/animalDietTracker.ts';
import {AnimalService} from './services/animalService.ts';

angular.module('app', [])
    .directive('animalDietTracker', () => new AnimalDietTracker())
    .service('animalService', AnimalService);