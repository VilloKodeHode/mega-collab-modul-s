import Image from "next/image";

export const ContactCard = ({
  name = "bob",
  phone = "12345678",
  color = "bg-contrast-100",
  href = "https://filestage.io/blog/website-content/",
}) => {
  return (
    <a
      href={href}
      className="bg-contrast-200 p-4 rounded-xl shadow border-t grid border-l-2 border-contrast-300"
    >
      <div className="grid mb-4 text-center">
        <h2 className="text-2xl">{name}</h2>
        <p>{phone}</p>
      </div>
      <Image
        className="rounded-xl"
        src="/profilBilde.jpg"
        width={150}
        height={150}
        alt="image of current person"
      />
    </a>
  );
};
