interface HeroCardProps {
  icon: JSX.Element;
  title: string;
  detail: string;
}

export default function HeroCard({ icon, title, detail }: HeroCardProps) {
  return (
    <div className="card-white">
      {icon}
      <h2 className="font-bold text-xl text-center">{title}</h2>
      <p className="text-center">{detail}</p>
    </div>
  );
}
