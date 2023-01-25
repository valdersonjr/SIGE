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
