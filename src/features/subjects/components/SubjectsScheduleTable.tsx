import React, { useEffect, useMemo, useState } from "react";
import { TextInput, Button, Text, Select } from "@mantine/core";
import {
  IconTrash,
  IconEdit,
  IconPlus,
  IconSearch,
  IconClock,
  IconUser,
  IconSchool,
  IconDeviceFloppy,
} from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { SubjectsScheduleCreateForm, SubjectsScheduleUpdateForm } from ".";
import {
  useCreateSubjectsSchedule,
  useDeleteSubjectsSchedule,
  useSubjectss,
  useUpdateSchedule,
} from "../api";
import { dayjs } from "lib/dayjs";
import { useTeachers } from "features/teacher";

const SubjectsScheduleTable = ({
  data,
  semester,
  kelas,
  titleSchedule,
}: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (data) {
      setDatas(
        data.map((item: any, index: number) => {
          return {
            ...item,
          };
        })
      );
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  function handleAdd() {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Tambah Jadwal Mata Pelajaran {titleSchedule}
        </div>
      ),
      children: <SubjectsScheduleCreateForm onSuccess={closeAllModals} />,
    });
  }

  const { mutateAsync, isLoading } = useUpdateSchedule({
    config: {
      onError({ response }) {
        // form.setErrors((response?.data as any).messages);
      },
      onSuccess() {
        closeAllModals();
        // onSuccess();
      },
    },
  });

  const handleSubmit = async () => {
    await mutateAsync({
      data: {
        jadwal_mapel: [
          ...datas.map((item: any) => ({
            id_jadwal_mapel: item.id_jadwal_mapel,
            id_mapel: item.id_mapel,
            id_guru: item.id_guru,
          })),
        ],
      },
    });
  };

  const { data: teacher } = useTeachers();

  const guru = useMemo(() => {
    return (teacher ?? []).map(({ nama_guru, id_guru }: any) => ({
      label: nama_guru,
      value: id_guru,
    }));
  }, [teacher]);

  const { data: mapel } = useSubjectss();

  const mataPelajaran = useMemo(() => {
    return (mapel ?? []).map(({ nama_mapel, id_mapel }: any) => ({
      label: nama_mapel,
      value: id_mapel,
    }));
  }, [mapel]);

  const hariHari = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];

  const updateDataInput = (value: any, index: number, name: any) => {
    let newArr: any = [...datas];

    newArr[index][name] = value;

    setDatas(newArr);
  };

  return (
    <div className="">
      <div className="pb-3 md:flex gap-x-5 mb-3 border-b">
        <h2>
          Semester :{" "}
          <span className="">
            {semester?.semester}, {semester?.tahun_awal}/{semester?.tahun_akhir}
          </span>
        </h2>
        <h2>
          Kelas : <span>{kelas?.nama_kelas}</span>
        </h2>
      </div>
      <div
        onClick={handleSubmit}
        className="fixed right-8 sm:right-14 shadow shadow-slate-400 bottom-10 flex items-center bg-green-500 z-50 rounded-xl p-3 cursor-pointer hover:bg-green-400"
      >
        <IconDeviceFloppy className="text-white mr-2" size={32} />{" "}
        <span className="text-white font-semibold text-lg mr-2">Simpan</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-14">
        {hariHari.map((day) => (
          <div className="pb-8 ">
            <h1 className="font-medium pb-2 capitalize">{day}</h1>
            {datas.filter((check: any) => check.hari == day).length > 0 ? (
              <div className="w-full grid gap-y-8 lg:gap-x-10 ">
                {datas.map(
                  (item: any, index: number) =>
                    item.hari == day && (
                      <div
                        key={index}
                        className="bg-white drop-shadow rounded-md py-3 px-3 flex items-center w-full"
                      >
                        <div className="flex flex-col items-center space-y-1  pr-4 ">
                          <IconClock size={50} className="text-green-800" />
                          <span className="font-semibold whitespace-nowrap">
                            {item.jam_mulai.slice(0, -3) +
                              "-" +
                              item.jam_selesai.slice(0, -3)}
                          </span>
                        </div>
                        <div className="px-4 md:flex space-y-2 md:space-y-0 md:space-x-8 justify-center w-full border-l border-l-slate-300 ">
                          <div className=" w-full ">
                            <Select
                              label="Guru Pengajar"
                              placeholder="Belum Diisi"
                              searchable
                              dropdownPosition="top"
                              data={guru}
                              value={item.id_guru}
                              onChange={(value) =>
                                updateDataInput(value, index, "id_guru")
                              }
                            />
                          </div>
                          <div className="w-full">
                            <Select
                              label="Mata Pelajaran"
                              placeholder="Belum Diisi"
                              searchable
                              dropdownPosition="top"
                              data={mataPelajaran}
                              value={item.id_mapel}
                              onChange={(value) =>
                                updateDataInput(value, index, "id_mapel")
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div className="bg-white drop-shadow rounded-md py-5 px-3  w-full text-center">
                Tidak ada Jadwal
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsScheduleTable;
