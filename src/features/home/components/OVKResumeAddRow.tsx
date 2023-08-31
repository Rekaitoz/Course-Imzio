import { Button, TextInput } from "@mantine/core";
import { useState } from "react";

const OVKResumeAddRow = ({
  setDataChange,
  dataChange,
  calculate,
  onSuccess,
  columns,
}: any) => {
  const [temp, setTemp] = useState<any>(0);

  const subClick = () => {
    const updatedDataChange = dataChange.map((dataItem: any) => {
      if (dataItem.tahun === calculate.tahun) {
        const updatedRow: any = {};
        columns.forEach((column: any) => {
          if (column.id !== "" && column.id !== "tahun") {
            updatedRow[column.id] = temp;
          }
        });

        return {
          ...dataItem,
          ...updatedRow,
        };
      }
      return dataItem;
    });

    setDataChange(updatedDataChange);
    setTemp(0); // Reset the temp value
    onSuccess();
    // await mutateAsync({ id });
  };

  return (
    <>
      <TextInput onChange={(event) => setTemp(event.currentTarget.value)} />
      <div className="flex items-center justify-end gap-4 mt-4">
        <Button type="button" variant="default" onClick={() => onSuccess()}>
          Tutup
        </Button>
        <Button onClick={subClick} className="bg-blue-900 hover:bg-blue-800">
          Ubah
        </Button>
      </div>
    </>
  );
};

export default OVKResumeAddRow;
