import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideosearchPage } from './videosearch';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, NavController, ToastController } from 'ionic-angular';

describe('HomePage', () => {
    let comp: VideosearchPage;
    let fixture: ComponentFixture<VideosearchPage>;
   
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideosearchPage],
            imports: [
                HttpClientModule,
                IonicModule.forRoot(VideosearchPage)
            ],
            providers: [
                NavController,
                HttpClient,
                ToastController
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideosearchPage);
        comp = fixture.componentInstance;
    });

    it('should create component', () => expect(comp).toBeDefined());

});
