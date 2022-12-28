export type CharacterStatusType = "Alive" | "Dead" | "unknown" | "all";

export const getCharacter = async (
  name: string,
  status?: CharacterStatusType
) => {
  const url =
    status && status !== "all"
      ? `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
      : `https://rickandmortyapi.com/api/character/?name=${name}`;
  const response = await fetch(url).then((res) => res.json());
  return response.results || [];
};
