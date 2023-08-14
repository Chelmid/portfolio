export function breakLine(
  paragraphe: string,
  element: string,
  replaceFor: string
) {
  const paragrapheSplit = paragraphe.split("");

  const positionsElementsLength = paragrapheSplit.filter((e) => e === element);

  for (let index = 0; index < positionsElementsLength.length; index++) {
    const positionsElements = paragrapheSplit.flatMap((e, i) =>
      e === element ? i : []
    );
    paragrapheSplit.splice(positionsElements[index] + 1, 0, replaceFor);
  }

  return (
    <>
      {paragrapheSplit
        .join("")
        .split("\n")
        .map((e) => (
          <p>{e}</p>
        ))}
    </>
  );
}
