type School = {
  name: string;
  longTitle?: boolean;
  flowersUrl: string | null;
  ornamentsUrl: string | null;
};

const schools: School[] = [
  {
    name: "Boyle Road Elementary",
    flowersUrl: null,
    ornamentsUrl: null,
  },
  {
    name: "Terryville Road Elementary",
    flowersUrl: null,
    ornamentsUrl: null,
  },
  {
    name: "JFK Middle School",
    longTitle: true,
    flowersUrl: null,
    ornamentsUrl: null,
  },
  {
    name: "Comsewogue High School",
    flowersUrl: null,
    ornamentsUrl: null,
  },
];

function OrderButton({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  if (!href) {
    return (
      <button
        type="button"
        className="order-button order-button--disabled"
        disabled
      >
        {label} – Coming Soon
      </button>
    );
  }
  return (
    <a
      href={href}
      className="order-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

export default function OrderHerePage() {
  return (
    <main className="subpage">
      <section className="subpage-hero">
        <p className="subpage-kicker">Order Here</p>
        <h1>School Event Orders</h1>
        <p>
          Select your school and choose an item to order for upcoming music and
          drama events.
        </p>
      </section>

      <section className="content-card">
        <h2>Order by School</h2>
        <p className="muted-copy">
          Use the buttons below to start your order. Links will be activated as
          school-specific forms are finalized.
        </p>
        <div className="school-grid">
          {schools.map((school) => (
            <article key={school.name} className="school-card">
              <h3
                className={
                  school.longTitle
                    ? "school-card__title school-card__title--long"
                    : "school-card__title"
                }
              >
                {school.name}
              </h3>
              <div className="order-buttons">
                <OrderButton href={school.flowersUrl} label="Concert Flowers" />
                <OrderButton href={school.ornamentsUrl} label="Drama Ornaments" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
