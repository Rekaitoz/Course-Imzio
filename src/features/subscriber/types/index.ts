export interface WaliProps {
  id: number;
  nik: string;
  fullName: string;
  email: string;
  job: string;
  lastEducation: string;
  noHP: string;
  address: string;
  province: string; //Memilih dari Database
  regency: string; //Memilih dari Database (Kabupaten)
  subDistrict: string; //Memilih dari Database (Kecamatan)
  waliName: string;
  password: string;
  code: string; //?? cara menambahkannya?
}

export interface SantriProps {
  id: number;
  noInduk: string;
  code: string; //?? cara menambahkannya?
  name: string;
  createdAt: Date; // Daftar pada tanggal berapa
  birthPlace: string;
  birthDate: Date;
  address: string;
  province: string; //Memilih dari Database
  regency: string; //Memilih dari Database (Kabupaten)
  subDistrict: string; //Memilih dari Database (Kecamatan)
  gender: string;
  orderBirthAt: number; //Anak Ke......
  fromBirth: number; //Dari ke...... Bersaudara
  waliName: string; //ngambil dari database?
}
