export function breakLine(
  paragraphe: string,
  element: string,
  replaceFor: string | string[]
) {
  const paragrapheSplit = paragraphe.split("");

  const positionsElementsLength = paragrapheSplit.filter((e) => e === element);

  for (let index = 0; index < positionsElementsLength.length; index++) {
    const positionsElements = paragrapheSplit.flatMap((e, i) =>
      e === element ? i : []
    );

    if (Array.isArray(replaceFor)) {
      replaceFor.map((replace) => {
        paragrapheSplit.splice(positionsElements[index] + 1, 0, replace);
      });
    } else {
      paragrapheSplit.splice(positionsElements[index] + 1, 0, replaceFor);
    }
  }

  return (
    <>
      {paragrapheSplit
        .join("")
        .split("\n")
        .map((e, i) => (
          <div key={i}>{e.length > 0 ? <p key={i}>{e}</p> : <br></br>}</div>
        ))}
    </>
  );
}
