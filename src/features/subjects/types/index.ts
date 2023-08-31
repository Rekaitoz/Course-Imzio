export interface SubjectsProps {
  id: number;
  subjects: string;
  teacher: string;
  category: string;
  appraisalType: string;
}

export interface SubjectsScheduleProps {
  id: number;
  subjectId: number;
  classId: number;
  subjectScheduleId: number;
  semesterId: number;
  startedDate: Date;
  endDate: Date;
}
export interface CategoryProps {
  id: number;
  nama_kategori: string;
}
