export const ContactCard = ({ name="bob", phone="12345678", color="bg-contrast-100", href="https://filestage.io/blog/website-content/" }) => {
  return (
    <a href={href} className="bg-contrast-200 p-4 rounded-xl shadow border-t border-l-2 border-contrast-300">
      <h2>{name}</h2>
      <p>{phone}</p>
    </a>
  );
};
