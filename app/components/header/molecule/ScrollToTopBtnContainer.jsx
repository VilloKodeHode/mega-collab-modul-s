import { BtnScroll } from "../atom/ScrollToTopButton";

export function ScrollToTopBtn() {
  return (
    <div className="fixed z-10 my-0 mx-auto py-10 content-center h-screen w-11/12 flex justify-end items-end">
      <BtnScroll />
    </div>
  );
}
