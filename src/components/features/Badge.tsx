type BadgeProps = {
  namesBadge?: string[];
};
export const Badge = ({ namesBadge = [] }: BadgeProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {namesBadge?.map((name) => (
        <span
          key={name}
          className="badge-border rounded-full p-2 m-1 text-sm  py-1">
          {name}
        </span>
      ))}
      {!namesBadge && (
        <span className="rounded-full p-2 m-1 text-sm  py-1"></span>
      )}
    </div>
  );
};
