import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
    ],
    declarations: []
})
export class MaterialModule {
}
