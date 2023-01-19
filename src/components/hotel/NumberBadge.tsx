const NumberBadge = ({ number, title }: { number: number; title: string }) => {
  return (
    <div className="text-main-blue text-right">
      <span className="text-5xl">{number}</span>
      <p>{title}</p>
    </div>
  );
};

export default NumberBadge;
