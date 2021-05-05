import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { MessagesRoutingModule } from './messages-routing.module';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SentComponent } from './components/sent/sent.component';

import { UserService } from '../services/user.service';
import { UserGuard } from '../services/user.guard';

@NgModule({
    declarations: [
        MainComponent,
        AddComponent,
        ReceivedComponent,
        SentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        MessagesRoutingModule
    ],
    exports: [
        MainComponent,
        AddComponent,
        ReceivedComponent,
        SentComponent
    ],
    providers: [ 
        UserService,
         UserGuard
    ]
})

export class MessagesModule {}