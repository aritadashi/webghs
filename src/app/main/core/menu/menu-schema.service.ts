import { IMenuItem } from './menu-schema.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuSchemaService {
  public getMenuItems(): IMenuItem[] {
    return [
      {
        menuID: '00-ADMIN',
        displayName: 'Admin',
        iconName: 'admin_panel_settings',
        children: [
          {
            menuID: '00/01-MASCOTE',
            displayName: 'Mascote',
            iconName: 'supervised_user_circle',
            children: [
              {
                menuID: '00/01/01-GERAR MENU',
                displayName: 'Gerar Menu',
                iconName: 'speaker_notes',
                route: 'gerar-menu',
              },
            ],
          },
        ],
      },
      {
        menuID: '01-CADASTRO',
        displayName: 'Cadastro',
        iconName: 'table_chart',
        children: [
          {
            menuID: '01/01-EMPRESAS',
            displayName: 'Empresas',
            route: 'cad-empresa',
          },
          {
            menuID: '01/02-ACESSOS',
            displayName: 'Acessos',
            iconName: 'vpn_key',
            children: [
              {
                menuID: '01/02/01-CADASTRO',
                displayName: 'Cadastro',
                children: [
                  {
                    menuID: '01/02/01/01-USUARIOS',
                    displayName: 'Usuários',
                    route: 'cad-usuario',
                  },
                  {
                    menuID: '01/02/01/02-GRUPOS',
                    displayName: 'Grupos',
                    route: 'cad-grupo',
                  },
                ],
              },
              {
                menuID: '01/02/02-DEFINIR-ACESSO',
                displayName: 'Definir Acesso',
                children: [
                  {
                    menuID: '01/02/02/01-USUARIOS',
                    displayName: 'Usuários',
                    route: 'acesso-usuario',
                  },
                  {
                    menuID: '01/02/02/02-GRUPOS',
                    displayName: 'Grupos',
                    route: 'acesso-grupo',
                  },
                  {
                    menuID: '01/02/02/03-TESTES',
                    displayName: 'Testes',
                    route: 'acesso-teste',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        menuID: '02-PRODUCAO',
        displayName: 'Produção',
        iconName: 'factory',
        children: [
          {
            menuID: '02/01-FICHA-TECNICA',
            displayName: 'Ficha Técnica',
            children: [
              {
                menuID: '02/01/01-INCLUI-FICHA-TECNICA',
                displayName: 'Inclui/Altera Ficha Técnica',
                route: 'cad-ficha-tecnica',
              },
              {
                menuID: '02/01/02-SIMULACAO-COMPOSICAO',
                displayName: 'Simulação de Composição/Custo',
                route: 'simula-composicao',
              },
            ],
          },
          {
            menuID: '02/02-CADASTROS',
            displayName: 'Cadastros',
            children: [
              {
                menuID: '02/02/01-GRUPO-PRODUTOS',
                displayName: 'Grupo de Produtos',
                route: 'cad-grupo-produtos',
              },
              {
                menuID: '02/02/02-COLECAO',
                displayName: 'Coleção',
                route: 'cad-colecao',
              },
            ],
          },
        ],
      },
    ];
  }
}
