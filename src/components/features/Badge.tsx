type BadgeProps = {
  namesBadge?: string[];
};
export const Badge = ({ namesBadge = [] }: BadgeProps) => {
  return (
    <div className="my-1">
      {namesBadge?.map((name) => (
        <span
          key={name}
          className="badge-border rounded-full px-4 mx-2 text-sm  py-1">
          {name}
        </span>
      ))}
      {!namesBadge && (
        <span className="rounded-full px-4 mx-2 text-sm  py-0.5"></span>
      )}
    </div>
  );
};
