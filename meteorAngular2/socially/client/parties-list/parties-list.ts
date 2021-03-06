///<reference path="../../typings/angular2-meteor.d.ts" />
 // just a comment...and another
import {Component, View} from 'angular2/core';
 
import {NgFor} from 'angular2/common';
 
import {Parties} from 'collections/parties';
 
import {PartiesForm} from 'client/parties-form/parties-form';
 
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'parties-list'
})

@View({
    templateUrl: '/client/parties-list/parties-list.html',
    directives: [NgFor, PartiesForm, RouterLink]
})
export class PartiesList {
    parties: Mongo.Cursor<Object>;
 
    constructor() {
        this.parties = Parties.find();
    }
 
    removeParty(party) {
        Parties.remove(party._id);
    }
}