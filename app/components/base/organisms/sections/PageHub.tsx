import { PageCard } from "../../molecyles/PageCard";
import { Page_item, PAGE_LIST } from "../../../../data/pageHub";

export default function PageHub() {
  // https://www.contentharmony.com/blog/content-hubs/

  return (
    <>
      <div className="w-full hidden">
        <h1>Page hub</h1>
        <span>bla bla bla</span>
      </div>
      <div className="w-full grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        { PAGE_LIST.map((item: Page_item) => <PageCard key={ item.href } {...item}/>) }
      </div>
    </>
  );
};