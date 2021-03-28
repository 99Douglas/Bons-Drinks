export const BuscaDeDrinks = async (drink) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
  const dados = await response.json();
  return dados;
}