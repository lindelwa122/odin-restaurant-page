import navbar from "../components/navbar";

const item = (heading, detail) => ({
  tagName: "div",
  options: {
    innerHTML: `
      <h2>${heading}</h2>
      <p>${detail}</p>
    `,
  },
});

const contacts = {
  tagName: "div",
  options: {
    style: {
      backgroundColor: "#1f2937",
      height: "100vh",
    },
  },
  children: [
    navbar(),
    {
      tagName: "div",
      options: {
        style: {
          padding: "20px 150px",
          color: "#e5e7eb",
        },
      },
      children: [
        {
          tagName: "h1",
          options: { innerHTML: "Contacts" },
        },
        item("Email", "peanutbuttercookies@legacycookies.com"),
        item("Phone Number", "+44 (123) 4567 890"),
        item("Address", "128 Old Town, PeanutButter Drive, Dustinville"),
      ],
    },
  ],
};

export default contacts;
