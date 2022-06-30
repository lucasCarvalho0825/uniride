import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorridaCreateComponent } from './views/componentes/corrida/corrida-create/corrida-create.component';
import { CorridaReadComponent } from './views/componentes/corrida/corrida-read/corrida-read.component';
import { HomeComponent } from './views/componentes/home/home/home.component';
import { MotoristaCreateComponent } from './views/componentes/motorista/motorista-create/motorista-create.component';
import { MotoristaDeleteComponent } from './views/componentes/motorista/motorista-delete/motorista-delete.component';
import { MotoristaReadComponent } from './views/componentes/motorista/motorista-read/motorista-read.component';
import { MotoristaUpdateComponent } from './views/componentes/motorista/motorista-update/motorista-update.component';
import { PassageiroCreateComponent } from './views/componentes/passageiro/passageiro-create/passageiro-create.component';
import { PassageiroDeleteComponent } from './views/componentes/passageiro/passageiro-delete/passageiro-delete.component';
import { PassageiroReadComponent } from './views/componentes/passageiro/passageiro-read/passageiro-read.component';
import { PassageiroUpdateComponent } from './views/componentes/passageiro/passageiro-update/passageiro-update.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'corrida/criar',
    component: CorridaCreateComponent
  },
  {
    path: 'corrida/ler',
    component: CorridaReadComponent
  },

  {
    path: 'motorista/criar',
    component: MotoristaCreateComponent

  },
  {
    path: 'motorista/ler',
    component: MotoristaReadComponent

  },
  {
    path: 'motorista/ler/atualizar/:id',
    component: MotoristaUpdateComponent

  },
  {
    path: 'motorista/ler/deletar/:id',
    component: MotoristaDeleteComponent

  },


  {
    path: 'passageiro/criar',
    component: PassageiroCreateComponent

  },
  {
    path: 'passageiro/ler',
    component: PassageiroReadComponent

  },
  {
    path: 'passageiro/ler/atualizar/:id',
    component: PassageiroUpdateComponent

  },
  {
    path: 'passageiro/ler/deletar/:id',
    component: PassageiroDeleteComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
