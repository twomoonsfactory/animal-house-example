import {AnimalHouse} from './animalHouse.ts';
import './styles.css';

export class AnimalDietTracker implements ng.IDirective {
    constructor() {
        return this.createDirective();
    }
    private createDirective(): any {
        return {
            restrict: 'E',
            scope: {},
            //used Webpack require, as relative pathing not supported for TemplateURL
            //in Angular 1.X
            template: require('./dietTrackerTemplate.html'),
            controller: AnimalHouse,
            controllerAs: 'animalHouse'
        }
    }
}