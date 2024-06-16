import Image from "next/image";
import Link from "next/link";
import { Page_item } from "../../data/pageHub";

export const PageCard = (props: Page_item) => {
  const { title, href, desc, img, tags } = props;

  return (
    <div key={href} className="
      flex
      flex-col
      gap-2
      p-4
      rounded

      bg-element-primary
      dark:bg-element-primary-dark
    ">
      <h3>{title}</h3>
      <div className="hidden">
        {img.length ? img.map(item =>
          <Image key={item} src={item} alt={desc} width={400} height={400}/>)
          :
          <Image src="/components/images/Saturn.jpg" alt="placeholder" width={400} height={400}/>
        }

      </div>
      <span>{desc}</span>
      <span className="flex justify-between">
        <span className="flex gap-2 text-xs">
          {tags && tags.map((tag, index) =>
            <p key={index} className="px-2 py-1 padding border-2 border-solid rounded-full">{tag}</p>
          )}
        </span>
        <Link className="text-blue-400 " key={title} href={href}>visit</Link>
      </span>
    </div>
  );
};