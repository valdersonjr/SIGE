import { ISideBarSections } from "./Navigation.interface"

export const sections:ISideBarSections[] = [{
    name: 'Início',
    path: '/',
    key: 0
},
{
    name: 'Alunos',
    path: '/alunos',
    key: 1
},
{
    name: 'Gestão Escolar',
    path: '/gestao-escolar',
    key: 2
},
{
    name: 'Usuários',
    path: '/usuarios',
    key: 3
},
{
    name: 'Relatórios',
    path: '/relatorios',
    key: 4
}]