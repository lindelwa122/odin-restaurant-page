const officeHours = () => {
  const hours = () => {
    const h3 = () => ({
      tagName: "h3",
      options: { innerHTML: "Hours" },
    });

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
      options: { 
        innerHTML: item,
        style: {
          marginBottom: "10px"
        }
      },
    }));

    const ul = () => ({
      tagName: "ul",
      children: li,
      options: {
        style: {
          listStyle: "none",
          margin: 0,
          padding: 0
        }
      }
    });

    return {
      tagName: "div",
      children: [h3(), ul()],
    };
  };

  const location = () => ({
    tagName: "div",
    options: {
      innerHTML: `
        <h3>Location</h3>
        <div>128 Old Town, PeanutButter Drive, Dustinville</div>
        `,
    },
  });

  return {
    tagName: "div",
    options: {
      classList: ["office-hours-section"],
      style: {
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "20px 150px",
        display: "flex",
        justifyContent: "space-between"
      }
    },
    children: [hours(), location()],
  };
};

export default officeHours;
