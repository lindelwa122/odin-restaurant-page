const officeHours = () => {
  const hours = () => {
    const h3 = () => {
      return {
        tagName: "h3",
        options: { innerHTML: "Hours" },
      };
    };

    const h = [
      "Monday: 7am - 5pm",
      "Tuesday: 7am - 5pm",
      "Wednesday: 7am - 5pm",
      "Thursday: 7am - 5pm",
      "Friday: 8am - 7pm",
      "Saturday: 10am - 4pm",
      "Sunday: 10am - 1pm",
    ];

    const li = h.map((item) => ({
      tagName: "li",
      options: { innerHTML: item },
    }));

    const ul = () => {
      return {
        tagName: "ul",
        children: li,
      };
    };

    return {
      tagName: "div",
      children: [h3(), ul()],
    };
  };

  const location = () => {
    return {
      tagName: "div",
      options: {
        innerHTML: `
          <h3>Location</h3>
          <div>128 Old Town, PeanutButter Drive, Dustinville</div>
          `,
      },
    };
  };

  return {
    tagName: "div",
    options: {
      classList: ["office-hours-section"],
    },
    children: [hours(), location()],
  };
};

export default officeHours;
