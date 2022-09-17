import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayComponent } from './video-play/video-play.component';
import { VideoRoutingModule } from './video-routing.module';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoPlayComponent
  ],
  imports: [
    VideoRoutingModule,
    SharedModule
  ]
})
export class VideoModule { }
