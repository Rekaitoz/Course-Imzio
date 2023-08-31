import { Button } from "@mantine/core";
import { IconFlag, IconThumbDown, IconThumbUp } from "@tabler/icons-react";

const TextBook: React.FC = () => {
  return (
    <main className="">
      <div className="leading-none border-b-[3px] border-b-sky-900 pb-1 px-1 w-fit">
        <span className="text-black text-opacity-60 text-[32px] font-bold">
          TextBook 1:
        </span>
        <span className="text-black text-[32px] font-bold"> Basic Backend</span>
      </div>

      {/* <div
        className="prose-lg pt-8"
        dangerouslySetInnerHTML={{ __html: data?.content as string }}
      /> */}
      <section id="example">
        <div className=" text-black text-sm font-medium prose-lg pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          fringilla velit, in maximus tortor. Quisque semper ante ut augue
          tincidunt, nec dictum purus aliquam. Fusce sed justo nisi.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Mauris auctor turpis ut metus aliquam, eu
          consectetur tortor feugiat. Morbi fermentum, lectus in tristique
          luctus, arcu lorem viverra mauris, id efficitur mi dolor at felis.
          Vestibulum sagittis diam eget sapien gravida semper. Curabitur vel
          orci lectus. Suspendisse ac libero sit amet elit pretium fermentum.
          Aliquam ultrices luctus tellus, a consequat erat fringilla sed. Nam id
          fringilla massa, ac suscipit est. Maecenas tempor dolor a eros
          molestie, id suscipit nulla tristique. Cras quis interdum metus, ut
          dictum purus.
          <img
            className="mx-auto w-[500px] h-[300px] pt-4"
            src="https://s3-alpha-sig.figma.com/img/687f/340c/471ae54c6e064034865d51d1e70bb167?Expires=1694390400&Signature=ZQrVKZ4Rna6jG-hGWyYL6qU4~HtUp4YwPjMw-2Wm3gCpEWFLK3WXGYv66BFNQpU4elX5pOuut0fpesOqQ~LP4coAvbyBgxQD8icEETm3TQQzwkDDC1AzunAiY-2E9CcYV-5A78IojOv8tDbztcGCt9S5Bk7Be5yXgQZxW4aRNuxwzI1KXDuDlJorW2mzA7fbpBHTOA80pMZUvyID8872LHe~cOalbpEWPuU4Dieiq00GXneNqe7WT2pw8JLlk73U3F5zv9n4EIxxYg1zyD8xO642sqUfTPmFQtZPLcqQ6pk4VxaUz5xbEHCHKRdPTMk2xaGYBANxhTvuhGip50Vweg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          Phasellus viverra dui ut nunc gravida tempus. Etiam euismod fringilla
          sagittis. Mauris malesuada tortor et risus rutrum, eu semper felis
          fringilla. Donec fringilla lorem quis odio feugiat fringilla. Aliquam
          erat volutpat. Nullam ultricies risus quis justo gravida, a finibus
          leo malesuada. Nullam ultricies purus a eros gravida varius. Etiam
          varius justo vitae condimentum ultricies. Quisque scelerisque nulla at
          tempus tempor. Suspendisse interdum ligula mauris, nec scelerisque
          lectus dapibus non. Nullam blandit, leo eu facilisis consequat, odio
          velit pulvinar metus, ut fringilla ligula odio et ligula. Nunc quis
          neque ut elit vestibulum rutrum. Phasellus euismod auctor turpis ac
          congue. Ut non libero odio. Nullam aliquam auctor mauris in
          ullamcorper. Nulla facilisi. Nam quis mi et eros finibus tristique at
          ac massa. Sed tincidunt sem sit amet neque finibus, sed viverra velit
          fermentum. In tristique est sed neque gravida, nec laoreet tellus
          imperdiet. Nam sit amet tortor id purus auctor tristique non et metus.
          <br />
          <br /> Duis gravida nisi ut felis aliquet, sed lobortis ex consequat.
          In laoreet leo vel fermentum aliquet. Maecenas non tincidunt metus, a
          consectetur elit. Nam nec sapien non lacus eleifend rhoncus. Cras eget
          ipsum semper, ultrices mauris ac, congue libero. Proin sit amet tortor
          et tortor bibendum rutrum. Nulla facilisi. Sed feugiat, mauris ac
          auctor consequat, metus ex cursus sem, a sagittis elit dolor at risus.
          Pellentesque eu ante ac metus pharetra sodales. Sed vestibulum, neque
          a consectetur eleifend, metus nisl vulputate massa, sed venenatis erat
          orci non ex. Quisque ut bibendum velit, ut gravida turpis. Aenean
          rhoncus consequat orci vitae venenatis. Fusce luctus maximus arcu,
          vitae lobortis felis condimentum a. Sed malesuada interdum est, a
          efficit.
          <br />
          <br /> Duis gravida nisi ut felis aliquet, sed lobortis ex consequat.
          In laoreet leo vel fermentum aliquet. Maecenas non tincidunt metus, a
          consectetur elit. Nam nec sapien non lacus eleifend rhoncus. Cras eget
          ipsum semper, ultrices mauris ac, congue libero. Proin sit amet tortor
          et tortor bibendum rutrum. Nulla facilisi. Sed feugiat, mauris ac
          auctor consequat, metus ex cursus sem, a sagittis elit dolor at risus.
          Pellentesque eu ante ac metus pharetra sodales. Sed vestibulum, neque
          a consectetur eleifend, metus nisl vulputate massa, sed venenatis erat
          orci non ex. Quisque ut bibendum velit, ut gravida turpis. Aenean
          rhoncus consequat orci vitae venenatis. Fusce luctus maximus arcu,
          vitae lobortis felis condimentum a. Sed malesuada interdum est, a
          efficit.
          <br />
          <br /> Duis gravida nisi ut felis aliquet, sed lobortis ex consequat.
          In laoreet leo vel fermentum aliquet. Maecenas non tincidunt metus, a
          consectetur elit. Nam nec sapien non lacus eleifend rhoncus. Cras eget
          ipsum semper, ultrices mauris ac, congue libero. Proin sit amet tortor
          et tortor bibendum rutrum. Nulla facilisi. Sed feugiat, mauris ac
          auctor consequat, metus ex cursus sem, a sagittis elit dolor at risus.
          Pellentesque eu ante ac metus pharetra sodales. Sed vestibulum, neque
          a consectetur eleifend, metus nisl vulputate massa, sed venenatis erat
          orci non ex. Quisque ut bibendum velit, ut gravida turpis. Aenean
          rhoncus consequat orci vitae venenatis. Fusce luctus maximus arcu,
          vitae lobortis felis condimentum a. Sed malesuada interdum est, a
          efficit.
          <br />
        </div>
      </section>
      <Button
        className="bg-sky-900 hover:bg-sky-800 my-5 rounded-[5px]"
        type="submit"
        size="md"
      >
        Tandai Sebagai Selesai
      </Button>
    </main>
  );
};

export default TextBook;
