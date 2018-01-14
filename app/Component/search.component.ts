import { ProfileComponent } from './profile.component';
import { GithubService } from './../Service/github.service';
import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector : 'search-bar', 
    templateUrl : 'app/Component/search.component.html',
    styles : [`
            img { 
                width : 90px;
            }
        `], 
    providers : [GithubService], 
    directives : [ProfileComponent, ROUTER_DIRECTIVES]
})

export class SearchComponent{ 
    private username; 
    users = [];
    constructor(private githubService : GithubService){
        
    }
    onSubmit(username){
        console.log(username);
        if (username.length > 3)
                this.githubService.GetAllProfiles(username).subscribe(data => this.users = data);
    }

    
}