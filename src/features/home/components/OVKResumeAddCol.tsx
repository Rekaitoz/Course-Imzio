import { Button, TextInput } from "@mantine/core";
import { useState } from "react";

const OVKResumeAddCol = ({
  setDataChange,
  dataChange,
  columnId,
  onSuccess,
}: any) => {
  const [temp, setTemp] = useState<any>(0);

  const subClick = () => {
    const updatedDataChange = dataChange.map((item: any) => {
      return {
        ...item,
        [columnId]: temp,
      };
    });
    setDataChange(updatedDataChange);
    setTemp(0); // Reset the temp value
    onSuccess();
    // // await mutateAsync({ id });
  };

  return (
    <>
      <TextInput
        onChange={(event) => setTemp(event.currentTarget.value)}
        autoFocus
      />
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

export default OVKResumeAddCol;
