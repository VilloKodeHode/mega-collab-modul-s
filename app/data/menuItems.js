// This file contains the menu list for the navigation
export const MENU_LIST = [
  {
    title: "Home",
    icon: "home",
    href: "/"
  },{
    title: "Pages",
    icon: "browse",
    href: "/pageHub",
    children: [
      {
        title: "Inna",
        href: "/inna"
      },{
        title: "Jesper",
        href: "/Jesper"
      },{
        title: "Erik",
        href: "/Erik"
      },{
        title: "Kaido",
        href: "/kaido"
      },{
        title: "Andre",
        href: "/component-andre"
      },{
        title: "ManaNode",
        href: "/manaNode"
      },{
        title: "MCC",
        href: "/MegaConfusionCorp"
      },{
        title: "RobertEx",
        href: "/robertExample"
      },{
        title: "Supersecret",
        href: "/supersecret"
      },{
        title: "Suspicious",
        href: "/suspicious",
        children: [
          {
            title: "Foo",
            href: "/foo",
          },{
            title: "Bar",
            href: "/bar",
          }
        ]
      },{
        title: "Warning",
        href: "/warning"
      },{
        title: "Weather",
        href: "/Weather"
      }
    ]
  },{
    title: "About",
    icon: "about",
    href: "/"
  },{
    title: "Contact",
    icon: "contact",
    href: "/"
  }
]