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
            template: require('./dietTrackerTemplate.html'),
            controller: AnimalHouse,
            controllerAs: 'animalHouse'
        }
    }
}