import {
    Component
} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h2> My Skills are : {{mySkill }}</h2>`
})

export class AppComponent {
    mySkill: string;
    skills = ['ASP.NET Core 1.0', 'Angular', 'C#', 'SQL', 'JSON'];

    constructor() {
        this.mySkill = this.skills[1];
    }
}