import Image from "next/image";
import Link from "next/link";
import { Page_item } from "../../data/pageHub";

export const PageCard = (props: Page_item) => {
  const { title, href, desc, img, tags } = props;

  return (
    <div key={href} className="
      flex
      flex-col
      gap-4
      p-4
      rounded

      text-black
      dark:text-white
r
      bg-gradient-to-b
      from-element-primary
      hover:from-element-secondary
      dark:from-element-primary-dark

      transition-colors
      ease-in-out
      duration-200
    ">
      <h3 className="text-2xl">{title}</h3>
      <div className="hidden">
        {img.length ? img.map(item =>
          <Image key={item} src={item} alt={desc} width={400} height={400}/>)
          :
          <Image src="/components/images/Saturn.jpg" alt="placeholder" width={400} height={400}/>
        }

      </div>
      <span>{desc}</span>
      <span className="flex justify-between mt-auto">
        <span className="flex gap-2 text-xs">
          {tags && tags.map((tag, index) =>
            <p key={index} className="px-2 py-1 padding border-2 border-solid rounded-full border-blue-300 text-cyan-100">{tag}</p>
          )}
        </span>
        <Link className="text-blue-400 hover:text-blue-500" key={title} href={href}>visit</Link>
      </span>
    </div>
  );
};