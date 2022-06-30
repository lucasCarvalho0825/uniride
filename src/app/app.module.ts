import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/templates/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from './views/templates/nav/nav.component';
import { CorridaCreateComponent } from './views/componentes/corrida/corrida-create/corrida-create.component';
import { CorridaReadComponent } from './views/componentes/corrida/corrida-read/corrida-read.component';
import { MotoristaCreateComponent } from './views/componentes/motorista/motorista-create/motorista-create.component';
import { MotoristaReadComponent } from './views/componentes/motorista/motorista-read/motorista-read.component';
import { PassageiroCreateComponent } from './views/componentes/passageiro/passageiro-create/passageiro-create.component';
import { PassageiroReadComponent } from './views/componentes/passageiro/passageiro-read/passageiro-read.component';
import { MotoristaUpdateComponent } from './views/componentes/motorista/motorista-update/motorista-update.component';
import { MotoristaDeleteComponent } from './views/componentes/motorista/motorista-delete/motorista-delete.component';
import { PassageiroUpdateComponent } from './views/componentes/passageiro/passageiro-update/passageiro-update.component';
import { PassageiroDeleteComponent } from './views/componentes/passageiro/passageiro-delete/passageiro-delete.component';
import { HomeComponent } from './views/componentes/home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CorridaCreateComponent,
    CorridaReadComponent,
    MotoristaCreateComponent,
    MotoristaReadComponent,
    PassageiroCreateComponent,
    PassageiroReadComponent,
    MotoristaUpdateComponent,
    MotoristaDeleteComponent,
    PassageiroUpdateComponent,
    PassageiroDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
