import { Button } from "@mantine/core";
import { IconFlag, IconThumbDown, IconThumbUp } from "@tabler/icons-react";

const Video: React.FC = () => {
  // console.log(videoFile.duration);

  return (
    <main className="">
      <div className="leading-none border-b-[3px] border-b-sky-900 pb-1 px-1 w-fit">
        <span className="text-black text-opacity-60 text-[32px] font-bold">
          Learning 1:
        </span>
        <span className="text-black text-[32px] font-bold">
          {" "}
          Basic Backend with Visual Studio Code
        </span>
      </div>

      {/* <div
        className="prose-lg pt-8"
        dangerouslySetInnerHTML={{ __html: data?.content as string }}
      /> */}

      <section id="example" className="mt-4 mb-5 space-y-5">
        <video controls src="/course/study.mkv" className="w-full">
          Video Error
        </video>
        <div className="bg-zinc-300 bg-opacity-40 rounded-[5px] p-3">
          <span className="text-black text-xs font-semibold tracking-tight">
            Lorem ipsum dolor sit amet
          </span>
          <p className="text-black text-xs font-normal tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            fringilla velit, in maximus tortor. Quisque semper ante ut augue
            tincidunt, nec dictum purus aliquam. Fusce sed justo nisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris auctor turpis ut metus aliquam, eu
            consectetur tortor feugiat. Morbi fermentum, lectus in tristique
            luctus, arcu lorem viverra mauris, id efficitur mi dolor at felis.
            Vestibulum sagittis diam eget sapien gravida semper. Curabitur vel
            orci lectus. Suspendisse ac libero sit amet elit pretium fermentum.
            Aliquam ultrices luctus tellus, a consequat erat fringilla sed. Nam
            id fringilla massa, ac suscipit est. Maecenas tempor dolor a eros
            molestie, id suscipit nulla tristique. Cras quis interdum metus, ut
            dictum purus.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Video;
