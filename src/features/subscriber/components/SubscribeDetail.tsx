import "../../../styles/popUp.css";
import {
  IconCheck,
  IconFileUpload,
  IconShoppingBag,
} from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useCreateTransfer } from "@/api/createTransfer";
import { formatCurrency } from "../../../utils/format";
import { IconArrowLeft } from "@tabler/icons-react";

interface closeButtonProps {
  handleClose: () => void;
  amount: number;
  message: string;
  name: string;
  payType: string;
  period: number | undefined;
  slug: string | undefined;
}

export const SubscribeDetail = ({
  handleClose,
  amount,
  message,
  name,
  payType,
  period,
  slug,
}: closeButtonProps) => {
  const [file, setFile] = useState<File | undefined>();
  const navigate = useNavigate();

  const payTy = () => {
    switch (payType) {
      case "qris":
        return { name: "QRIS", image: "/transaction/logo-qris.png" };
      case "dana":
        return { name: "Dana", image: "/transaction/logo-dana.png" };
      case "gopay":
        return { name: "Gopay", image: "/transaction/logo-gopay.png" };
      case "bca":
        return { name: "Bank BCA", image: "/transaction/logo-bca.png" };
      case "mandiri":
        return {
          name: "Bank Mandiri",
          image: "/transaction/logo-mandiri.png",
        };
      case "bni":
        return { name: "Bank BNI", image: "/transaction/logo-bni.png" };
      case "bri":
        return { name: "Bank BRI", image: "/transaction/logo-bri.png" };
      case "btn":
        return { name: "Bank BTN", image: "/transaction/logo-btn.png" };
      default:
        return { name: "", image: "" };
    }
  };

  const [warn, setWarn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // file
    //   ?
    //   await mutateAsync({
    //       data: {
    //         amount,
    //         message,
    //         name,
    //         period,
    //         type: "nonota",
    //         testimony: file,
    //       },
    //     })
    //   : setWarn(true);
  };

  //   const { mutateAsync } = useCreateTransfer({
  //     config: {
  //       onError({ response }) {
  //         console.log(response);
  //       },
  //       onSuccess() {
  //         setShowSuccess(true);
  //         setTimeout(() => {
  //           setShowSuccess(false);
  //           navigate(`/donation/${slug}`);
  //         }, 2000);
  //         handleClose;
  //       },
  //     },
  //   });

  return (
    <div className="popup-box">
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-black opacity-60 fixed inset-0"></div>
          <div className="bg-white rounded-lg p-8 z-20 text-center flex flex-col items-center gap-y-4">
            <IconCheck
              size={70}
              className="border-2 p-1 rounded-full border-green-500 text-green-500"
            />
            <p className="text-2xl font-bold mb-4">Bukti Berhasil Dikirim!</p>
            <p>Anda akan dikembalikan ke page sebelumnya...</p>
          </div>
        </div>
      )}
      <div className="box">
        <button
          className="fixed mt-3 z-10 ml-3 float-right bg-white p-1 rounded-full text-cyan-600 drop-shadow-md"
          onClick={handleClose}
        >
          <IconArrowLeft size={30} />
        </button>

        <div className="py-14 space-y-5 px-4 md:px-8">
          <div className="text-center font-semibold text-zinc-800">
            Buka m-Banking atau e-Wallet dan pindai Kode QR untuk menyelesaikan
            pembayaran
          </div>
          <section className="grid grid-cols-2 gap-x-14 bg-white drop-shadow-md px-4 py-3 rounded-lg">
            <div className="grid row-span-2 gap-y-2 ">
              <span className="text-slate-500 font-medium">Donasi Anda</span>
              <span className="text-xl font-semibold">
                {formatCurrency(amount + 1000)}
              </span>
              <span className="flex font-semibold items-center">
                <IconShoppingBag className="mr-2 text-primary-700" />
                PREMIUM MEMBER
              </span>
            </div>
            <div className="grid row-span-0 gap-2">
              <span className="text-slate-500 font-medium">Dengan</span>
              <img className="pb-1" src={payTy().image} alt="" />
            </div>
          </section>

          <section>
            <div className="text-center text-zinc-800 font-bold pt-5 pb-3">
              Pindai Kode QR
            </div>
            <div className=" bg-white drop-shadow-md px-16 py-10 rounded-lg text-primary-700 text-center font-bold text-2xl ">
              IMZIO EDUCATION
              <div className="text-center text-zinc-800 text-lg font-normal leading-tight py-2">
                NMID: ID98971236451623
              </div>
              <img
                className="mx-auto pt-2 w-full"
                src="/transaction/qr.png"
                alt=""
              />
            </div>
          </section>
          <div className="text-center font-semibold text-white">
            Mohon diingat bahwa kode QR hanya dapat dipindai sekali untuk
            mencegah saldo terpotong dua kali
          </div>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="transUpload"
              className="bg-white text-black flex py-2 px-8 rounded-3xl font-semibold text-sm justify-between items-center hover:bg-primary-500 shadow-md shadow-slate-50 cursor-pointer"
            >
              <span>
                {!file
                  ? "Silakan Upload ScreenShoot Bukti Pembayaran"
                  : file && file?.name}
              </span>
              <IconFileUpload />
              <input
                id="transUpload"
                type="file"
                className="hidden"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFile(e.currentTarget.files?.[0]);
                  setWarn(false);
                }}
              />
            </label>

            <div
              className={`text-red-500 text-sm font-medium mt-2 text-center w-full ${
                warn ? "" : "hidden"
              }`}
              id="validationMessage"
            >
              Tolong Upload Bukti Pembayaran
            </div>

            <button
              type="submit"
              className="w-full bg-white py-2 mt-5 font-semibold text-primary-500 border-primary-400 border-2 border-transparent rounded-3xl  hover:bg-primary-50"
            >
              Kirim Bukti Pembayaran
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
