import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
  ActionIcon,
  Group,
  Text,
} from "@mantine/core";
import { forwardRef, useMemo, useRef } from "react";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import {
  UpdateSubjectsScheduleDTO,
  useSubjectss,
  useUpdateSubjectsSchedule,
} from "../api";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { useClasss } from "features/class";
import { useTeachers } from "features/teacher";
import { useSemesters } from "features/semester";
import { useTimes } from "features/time";
// import { SubjectsSchedule } from "../types";

interface Props {
  subjectsSchedule: {
    id_jadwal_mapel: number;
    id_kelas: number | null;
    id_mapel: number | null;
    id_guru: number | null;
    id_semester: number | null;
    id_jam_pelajaran: number | null;
    tgl_mulai: string;
    tgl_selesai: string;
    operator: number;
  };
  onSuccess: VoidFunction;
}

const SubjectsScheduleUpdateForm: React.FC<Props> = ({
  subjectsSchedule,
  onSuccess,
}) => {
  const form = useForm<UpdateSubjectsScheduleDTO["data"]>({
    initialValues: {
      id_kelas: subjectsSchedule.id_kelas,
      id_mapel: subjectsSchedule.id_mapel,
      id_guru: subjectsSchedule.id_guru,
      id_semester: subjectsSchedule.id_semester,
      id_jam_pelajaran: subjectsSchedule.id_jam_pelajaran,
      tgl_mulai: new Date(subjectsSchedule.tgl_mulai),
      tgl_selesai: new Date(subjectsSchedule.tgl_selesai),
      operator: 1,
    },
  });

  const { data: kelas } = useClasss();
  const { data: mapel } = useSubjectss();
  const { data: teacher } = useTeachers();
  const { data: semesters } = useSemesters();
  const { data: timepel } = useTimes();

  const kelasJadwal = useMemo(() => {
    return (kelas ?? []).map(({ nama_kelas, id_kelas }: any) => ({
      label: nama_kelas,
      value: id_kelas,
    }));
  }, [kelas]);
  const mataPelajaran = useMemo(() => {
    return (mapel ?? []).map(({ nama_mapel, id_mapel }: any) => ({
      label: nama_mapel,
      value: id_mapel,
    }));
  }, [mapel]);

  const guru = useMemo(() => {
    return (teacher ?? []).map(({ nama_guru, id_guru }: any) => ({
      label: nama_guru,
      value: id_guru,
    }));
  }, [teacher]);

  const semester = useMemo(() => {
    return (semesters ?? []).map(
      ({ semester, id_semester, tahun_awal, tahun_akhir }: any) => ({
        label: semester,
        value: id_semester,
        description: tahun_awal + "/" + tahun_akhir,
      })
    );
  }, [semesters]);

  const jamPel = useMemo(() => {
    return (timepel ?? []).map(
      ({ hari, id_jam_pelajaran, jam_mulai, jam_selesai }: any) => ({
        image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
        label: hari,
        description: jam_mulai + " - " + jam_selesai,
        value: id_jam_pelajaran,
      })
    );
  }, [timepel]);

  interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    image: string;
    label: string;
    description: string;
  }

  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" opacity={0.65}>
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );

  const { mutateAsync, isLoading } = useUpdateSubjectsSchedule({
    config: {
      onError({ response }) {
        form.setErrors((response?.data as any).messages);
      },
      onSuccess() {
        closeAllModals();
        onSuccess();
      },
    },
  });

  const handleSubmit = form.onSubmit(async (data) => {
    await mutateAsync({
      id_jadwal_mapel: subjectsSchedule.id_jadwal_mapel,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-3 pb-5">
        <Select
          label="Nama Kelas"
          placeholder=""
          searchable
          data={kelasJadwal}
          {...form.getInputProps("id_kelas")}
        />
        <Select
          label="Mata Pelajaran"
          placeholder=""
          searchable
          data={mataPelajaran}
          {...form.getInputProps("id_mapel")}
        />
        <Select
          label="Guru"
          placeholder=""
          searchable
          data={guru}
          {...form.getInputProps("id_guru")}
        />

        <Select
          label="Semester"
          placeholder=""
          searchable
          data={semester}
          itemComponent={SelectItem}
          {...form.getInputProps("id_semester")}
        />
        <Select
          label="Jam Pelajaran"
          placeholder=""
          searchable
          data={jamPel}
          itemComponent={SelectItem}
          {...form.getInputProps("id_jam_pelajaran")}
        />
        <DateInput
          label="Tanggal Mulai"
          required
          {...form.getInputProps("tgl_mulai")}
        />
        <DateInput
          label="Tanggal Berakhir"
          required
          {...form.getInputProps("tgl_selesai")}
        />
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          type="button"
          variant="default"
          onClick={() => closeAllModals()}
          loading={isLoading}
        >
          Tutup
        </Button>
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default SubjectsScheduleUpdateForm;
