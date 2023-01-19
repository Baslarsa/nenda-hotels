const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center px-4">
      <img
        className="h-8 w-auto"
        src={process.env.PUBLIC_URL + "/nenda-logo.png"}
        alt="Nenda logo"
      />
    </div>
  );
};

export default Logo;
