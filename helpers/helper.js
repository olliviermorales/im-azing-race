export const hospitals = [
  {
    name: 'AFP Medical Center',
    pictureSrc: '/assets/images/AFP_Medical_Center.jpg',
  },
  {
    name: 'UERM Memorial Medical Center',
    pictureSrc: '/assets/images/UERM.png',
  },
  {
    name: 'National Kidney and Transplant Institute',
    pictureSrc: '/assets/images/NKTI.png',
  },
  {
    name: 'Delos Santos Medical Center',
    pictureSrc: '/assets/images/delos.png',
  },
  {
    name: 'Quirino Memorial Medical Center',
    pictureSrc: '/assets/images/qmmc.jpg',
  },
  {
    name: 'World Citi Medical Center',
    pictureSrc: '/assets/images/wcmc.png',
  },
  {
    name: 'Quezon City General Hospital',
    pictureSrc: '/assets/images/qcgh.jpeg',
  },
  {
    name: 'Capitol Medical Center',
    pictureSrc: '/assets/images/capitol.png',
  },
  {
    name: 'FEU-NRMF Medical Center',
    pictureSrc: '/assets/images/feu.png',
  },
  {
    name: 'East Avenue Medical Center',
    pictureSrc: '/assets/images/eamc.png',
  },
  {
    name: "St. Luke's Medical Center",
    pictureSrc: '/assets/images/stlukes.png',
  },
];

export const validateEmail = (email) => {
  // This regex checks for the presence of at least one '@' and one '.'
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
