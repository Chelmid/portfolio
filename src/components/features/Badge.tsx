type BagdeProps = {
  namesBadge?: string[];
};
export const Bagde = ({ namesBadge }: BagdeProps) => {
  return (
    <div className="my-1">
      {namesBadge?.map((name) => (
        <span
          key={name}
          className="border border-gray-300 rounded-full px-4 mx-2 text-sm  py-0.5">
          {name}
        </span>
      ))}
      {!namesBadge && (
        <span className="rounded-full px-4 mx-2 text-sm  py-0.5"></span>
      )}
    </div>
  );
};
