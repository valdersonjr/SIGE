export const dropdownSections = [{
    key: 0,
},
{
    key: 1,
},
{
    key: 2,
},
{
    key: 3,
},
{
    key: 4,
},]


export const dadosCadastraisSection = [{
    key: 0,
    title: '',
    content: 'Nenhuma'
},
{
    key: 1,
    title: 'Período',
    content: 'Manhã'
},
{
    key: 2,
    title: 'Atividades Extras',
    content: 'Nenhuma'
},
{
    key: 3,
    title: 'Matrícula',
    content: '#00930490'
}];

export const dadosDosResponsaveisSection = [{
    key: 0,
    title: 'Mãe',
    content: 'Vera alvez de Lima'
},
{
    key: 1,
    title: 'Pai',
    content: 'André Carlos de Lima'
}];

export const contatosDeEmergenciaSection = [{
    key: 0,
    title: 'Telefone Mãe',
    content: '(00) 0 0000-0000'
},
{
    key: 1,
    title: 'Telefone Pai',
    content: '(00) 0 0000-0000'
},
{
    key: 2,
    title: 'Telefone Avô',
    content: '(00) 0 0000-0000'
}
];

export const calculateAge = (birthdate: string): number => {
    const birthdateArray = birthdate.split('/');
    const day = parseInt(birthdateArray[0]);
    const month = parseInt(birthdateArray[1]);
    const year = parseInt(birthdateArray[2]);
    const today = new Date();
    let age = today.getFullYear() - year;
    const monthDiff = today.getMonth() - month;
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
      age--;
    }
    return age;
  }
