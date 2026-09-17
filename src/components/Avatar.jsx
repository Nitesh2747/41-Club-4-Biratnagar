function getInitials(name) {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function Avatar({ name, image, tone = "ink" }) {
  return (
    <div className={`avatar ${tone}`}>
      {image ? (
        <img src={image} alt={name} loading="lazy" />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}
