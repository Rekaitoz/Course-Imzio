export type Creds = {
  id_user: string | number;
  username: string;
};

export type MetaData = {
  page?: number | null; // Page nih yang dari pagination lah bang? kalau 1 = 1 - 5, kalau 2 6-10?
  startDate?: Date | null; //Hiraukan sadja, gasan filter
  endDate?: Date | null; //Hiraukan sadja, gasan filter
  // Bebas aja bang limit mau dimasukkan atau enggak
  limit?: number | null; //Default = 5, Semua dikirim = -1, 0 tidak ada
  count?: number | null; //Kalau count nih batas perpage nya lah bang? kaya 5 aja per page
};
