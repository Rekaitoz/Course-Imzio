import { Button, TextInput } from "@mantine/core";
import {
  IconArrowBackUp,
  IconArrowUp,
  IconDiscountCheckFilled,
  IconFlag,
  IconSend,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";

const Chat: React.FC = () => {
  return (
    <main className="mb-10 relative">
      <div className="leading-none border-b-[3px] border-b-sky-900 pb-1 px-1 w-fit">
        <span className="text-black text-opacity-60 text-[32px] font-bold">
          Diskusi :
        </span>
        <span className="text-black text-[32px] font-bold">
          {" "}
          Silakan Ajukan Pertanyaan
        </span>
      </div>
      <div className="mt-8 space-y-5">
        {new Array(2).fill(0).map((item) => (
          <div className="flex gap-x-5">
            <img
              className="rounded-[10px] w-[60px] h-[60px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/a239/4f53/17050f6eddd19c7dae3074aecd69fc6d?Expires=1694390400&Signature=llBuP~4UVxR5sy-IiMTTu2-dASF7V~QadiR0N2ax2Nk1ya7bWDaKoSYllDNwyxz7HnIAYRCdpMIbRkzoV4o-3EphroxKFHzb9kWeb0fXt4wIWBDhB8MxXMLq3FWB9lFcLbaYfj~efrxx6BklLKbMo2FvZNgDBHXd694PwJaflRx~5ja8OX7oEEebt2Ps6gzwA9mqO-CEH59xeylRKGtyMry2lJ4VpAOXTKQTkM6oL2VD9tUER9dU1Itv5pHySXdoUSxjBEAtdMTJjJw3vG3LKdM7pNDiGDNd4J5qm25TF3kkweLMYLvUI3oGqd1nE2klAOaG~s5cZiekSunFD-rUgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div>
              <div className="space-y-1">
                <div className="text-black text-lg font-bold leading-tight flex items-center gap-x-1">
                  Joong-Kok{" "}
                  <IconDiscountCheckFilled className="text-cyan-600" />
                </div>
                <div className="text-stone-400 text-base font-light leading-tight">
                  6 Hari yang lalu
                </div>
                <div className=" text-black text-base font-normal leading-tight">
                  Phasellus viverra dui ut nunc gravida tempus. Etiam euismod
                  fringilla sagittis. Mauris malesuada tortor et risus rutrum,
                  eu semper felis fringilla.
                </div>
                <div className="flex gap-x-4">
                  <div className="text-black text-opacity-50 text-xs font-medium leading-tight flex items-center hover:text-blue-500 hover:cursor-pointer gap-x-1">
                    <IconArrowUp size={15} /> 132
                  </div>
                  <div className="text-black text-opacity-50 text-xs font-medium leading-tight flex items-center hover:text-blue-500 hover:cursor-pointer gap-x-1">
                    <IconArrowBackUp size={15} /> Balas
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-3">
                {new Array(2).fill(0).map((item) => (
                  <div className="flex gap-x-5">
                    <img
                      className="rounded-[10px] w-[60px] h-[60px] object-cover"
                      src="https://s3-alpha-sig.figma.com/img/306d/b6c3/2b1bdb36924e475e599de4c99b4ada68?Expires=1694390400&Signature=pehv5HJjEDNeUmgCzR8znHa2AKp~sbTy4xBlH7B9OvyrleZC68BBfPX5poe1ADBocxxChKeOgtJu3Cmm7EeI20AEuCRDZ2ItceKf2iZR03Cs5PpKvVPIwf5rUxFXPLLeo-uKUiDNwh~SF2kBU01kuCUlRwYT~WPoU5nSkCegmGJeU~qHUjCm-ptoYmMKj8V1lIsXS8EO92783ut~QSzLlO1VXcN0LwGd6UPz1YBhmTSyPFNjNHvEeuS3hRCKhOuUeCYg8mZMYzDB6sAAu8vih8dv8UKNmKG45QKPxb~9VGpLaKEQSEw1mdHm~OdKP~04C9phm4-ZhxHpRrExgDhRYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                    />
                    <div className="space-y-1">
                      <div className="text-black text-lg font-bold leading-tight flex items-center gap-x-1">
                        Naruto{" "}
                      </div>
                      <div className="text-stone-400 text-base font-light leading-tight">
                        6 Hari yang lalu
                      </div>
                      <div className=" text-black text-base font-normal leading-tight">
                        Phasellus viverra dui ut nunc gravida tempus. Etiam
                        euismod fringilla sagittis. Mauris malesuada tortor et
                        risus rutrum, eu semper felis fringilla.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className=" fixed  bottom-8 w-[calc(100%-100px)] lg:w-[calc(100%-400px)] max-w-5xl flex items-center gap-x-4">
        <img
          className="rounded-[10px] w-[50px] h-[50px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/a239/4f53/17050f6eddd19c7dae3074aecd69fc6d?Expires=1694390400&Signature=llBuP~4UVxR5sy-IiMTTu2-dASF7V~QadiR0N2ax2Nk1ya7bWDaKoSYllDNwyxz7HnIAYRCdpMIbRkzoV4o-3EphroxKFHzb9kWeb0fXt4wIWBDhB8MxXMLq3FWB9lFcLbaYfj~efrxx6BklLKbMo2FvZNgDBHXd694PwJaflRx~5ja8OX7oEEebt2Ps6gzwA9mqO-CEH59xeylRKGtyMry2lJ4VpAOXTKQTkM6oL2VD9tUER9dU1Itv5pHySXdoUSxjBEAtdMTJjJw3vG3LKdM7pNDiGDNd4J5qm25TF3kkweLMYLvUI3oGqd1nE2klAOaG~s5cZiekSunFD-rUgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="w-full h-[40px] bg-zinc-100 rounded-[5px] border border-neutral-200 flex items-center px-4 ">
          <TextInput
            variant="unstyled"
            withAsterisk
            className=" w-full"
            placeholder="Ikut berdiskusi. . ."
          />
          <div>
            <IconSend className="text-cyan-600" />
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Chat;
